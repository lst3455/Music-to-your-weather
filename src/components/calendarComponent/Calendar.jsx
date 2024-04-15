import React, { useState, useEffect } from 'react';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import './Calendar.css';


//http请求相关函数
const dateRegex = new RegExp('^\\d\\d\\d\\d-\\d\\d-\\d\\d');
function jsonDateReviver(key, value) {
  if (dateRegex.test(value)) return new Date(value);
  return value;
}
async function graphQLFetch(query, variables = {}) {
  try {
    const response = await fetch('http://localhost:4000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables })
    });
    const body = await response.text();
    const result = JSON.parse(body, jsonDateReviver);

    if (result.errors) {
      const error = result.errors[0];
      if (error.extensions.code == 'BAD_USER_INPUT') {
        const details = error.extensions.exception.errors.join('\n ');
        alert(`${error.message}:\n ${details}`);
      } else {
        alert(`${error.extensions.code}: ${error.message}`);
      }
    }
    return result.data;
  } catch (e) {
    alert(`Error in sending data to server: ${e.message}`);
  }
}

async function getLikesByDate(date) {
  const query = `{
    getLikes(date:"${date}"){
      track
      artist
    }
  }`;
  const data = await graphQLFetch(query);
  return data.getLikes;
}

//日历组件
const Calendar = (props) => {
  const getInitialDate = () => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);  // 设置时间为00:00:00:000
    return now;
  };

  const [selectedDate, setSelectedDate] = useState(getInitialDate());
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    if (selectedDate === null) {
      setSelectedDate(getInitialDate());
      return;
    }
    console.log("selectedDate: " + selectedDate);

    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + 1); // 将日期加一天
    const formattedDate = newDate.toISOString().split('T')[0]; // 格式化日期为 YYYY-MM-DD

    console.log("Adjusted Date: " + formattedDate); // 打印调整后的日期，用于确认
    fetchLikes(formattedDate);
  }, [selectedDate]);

  //查询数据库函数
  const fetchLikes = async (date) => {
    //按照date查询当天的like并返回，date格式为2024-04-10
    let likes = await getLikesByDate(date);
    /**
     * likes为在日历组件中点击更改日期后，最终获取到的结果数组
     * 格式为[{track: 'Stars', artist: 'Jack'}]
     * 需要写一下前端的展示逻辑，也就是把likes展示到页面上
     * 最好再写个逻辑，刚进入页面时，获取当天的like并展示
     * 你可以直接调用getLikesByDate函数，传入datej就行
     */
    console.log(likes);
    setLikes(likes);
  };

  // 传入track和artist和date，用于添加对应数据库中的数据
  useEffect(() => {
    console.log("likeTrack: " + props.musicNameToCalendar); // track
    console.log("likeArtist: " + props.musicArtistToCalendar); // artist

    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + 1); // 将日期加一天
    const formattedDate = newDate.toISOString().split('T')[0]; // 格式化日期为 YYYY-MM-DD
    console.log("likeDate: " + formattedDate); // date
    // 在此处完成函数来添加数据(每日最大插入八条喜欢的歌曲，插入前需要先确认是否还有空位插入)，并重新获取该选择日期下的数据
  }, [props.addLikeMusicClickedToCalendar]);

  const onDateChange = async (e) => {
    // set the selected date to the selectedDate
    setSelectedDate(e.value);
  };

  const LikesRows = (props) => {
    const truncateText = (text, maxLength) => {
      return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
    };
    // delete函数传入track和artist和date，用于删除对应数据库中的数据
    const handleDelete = () => {
      console.log("deleteTrack: " + props.track); // track
      console.log("deleteArtist: " + props.artist); // artist

      const newDate = new Date(selectedDate);
      newDate.setDate(newDate.getDate() + 1); // 将日期加一天
      const formattedDate = newDate.toISOString().split('T')[0]; // 格式化日期为 YYYY-MM-DD
      console.log("deleteDate: " + formattedDate); // date
      // 在此处完成函数来删除数据，并重新获取该选择日期下的数据
    };

    return (
      <tr>
        <td>{truncateText(props.track, 20)}</td>
        <td>{truncateText(props.artist, 20)}</td>
        <td>
          <button onClick={handleDelete} className='button-delete'>
            ✖
          </button>
        </td>
      </tr>
    );
  };

  const LikesTable = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Track</th>
            <th>Artist</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {likes.length === 0 &&
            <tr>
              <td colSpan="3">No like Music</td>
            </tr>
          }
          {likes.map((like, index) => (
            <LikesRows key={`${like.track}_${index}`} track={like.track} artist={like.artist} />
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <div>
      <div class="right-column">
        <div class="calendar">
          <DatePickerComponent
            placeholder='Chose a date to go(default today)'
            format={"dd-MMM-yy"}
            onChange={onDateChange}
            strictMode={true}
            allowEdit={false}
            max={new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())}
          ></DatePickerComponent>
          <LikesTable />
        </div>
      </div>
    </div>
  );
};

export default Calendar;