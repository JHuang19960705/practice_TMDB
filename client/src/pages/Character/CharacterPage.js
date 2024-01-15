import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "../../styles/celebrity-page1.css";
import "../../styles/celebrity-page2.css";
import CastPage from '../../components/Charactor/CastPage';


export default function CharacterPage() {
  const { castId } = useParams();
  return (
    <div>
      <div className="js-celebrity-wrap">
        <CastPage />
      </div>
      <div className="p-schedule">
        <div className="p-schedule__cnt">
          <div className="p-schedule__ttl">
            <h2 className="p-schedule__heading_h2">
              <p className="p-schedule__heading_h2_01">Oneday<br/> Schedule</p>
              <p className="p-schedule__heading_h2_02">ある1日の流れ</p>
            </h2>
          </div>
          <dl className="p-schedule__list">
            <dt>8:30</dt>
            <dd>出勤、掃除、朝礼</dd>
            <dt>9:00</dt>
            <dd>外訪準備</dd>
            <dt>9:30</dt>
            <dd>外訪1軒目</dd>
            <dt>11:00</dt>
            <dd>外訪2軒目</dd>
            <dt>12:00</dt>
            <dd>昼休憩</dd>
            <dt>13:00</dt>
            <dd>外訪3軒目</dd>
            <dt>14:00</dt>
            <dd>外訪4軒目</dd>
            <dt>15:00</dt>
            <dd>外訪5軒目</dd>
            <dt>16:00</dt>
            <dd>帰店、面談記録作成</dd>
            <dt>16:30</dt>
            <dd>翌日の外訪準備</dd>
            <dt>17:00</dt>
            <dd>退行</dd>
          </dl>
        </div>
      </div>
    </div>
  )
}
