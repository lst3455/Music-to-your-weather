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
      headers: { 'Content-Type': 'application/json'},
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

  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    console.log("selectedDate: " + selectedDate);
  }, [selectedDate]);

  const onDateChange = async (e) => {
    // set the selected date to the selectedDate
    setSelectedDate(e.value);
    //截取日期   截取后的格式为2024-04-10，在数据库中直接存储该字符串
    let date = e.value.toISOString().split('T')[0];
    //将截取的日期加上一天，bug？
    date = new Date(date);
    date.setDate(date.getDate() + 1);
    date = date.toISOString().split('T')[0];
    console.log(date);
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
  };

  return (
    <div>
      <div class="right-column">
        <div class="calendar">
          <DatePickerComponent
            placeholder='Chose a date to go'
            format={"dd-MMM-yy"}
            onChange={onDateChange}
            strictMode={true}
            allowEdit={false}
            max={new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())}
          ></DatePickerComponent>
          <table>
            <tr>
              <th>Track</th>
              <th>Artist</th>
            </tr>
            <tr>
              <td>Requiem: II. Dies irae</td>
              <td>Giuseppe Verdi</td>
            </tr>
            <tr>
              <td>Requiem: II. Dies irae</td>
              <td>Giuseppe Verdi</td>
            </tr>
            <tr>
              <td>Requiem: II. Dies irae</td>
              <td>Giuseppe Verdi</td>
            </tr>
            <tr>
              <td>Requiem: II. Dies irae</td>
              <td>Giuseppe Verdi</td>
            </tr>
            <tr>
              <td>Requiem: II. Dies irae</td>
              <td>Giuseppe Verdi</td>
            </tr>
            <tr>
              <td>Requiem: II. Dies irae</td>
              <td>Giuseppe Verdi</td>
            </tr>
            <tr>
              <td>Requiem: II. Dies irae</td>
              <td>Giuseppe Verdi</td>
            </tr>
            <tr>
              <td>Requiem: II. Dies irae</td>
              <td>Giuseppe Verdi</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Calendar;