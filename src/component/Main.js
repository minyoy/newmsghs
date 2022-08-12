import fork from "../img/fork.png";
import dummy from "../db/dummy.json";
import { useParams } from "react-router-dom";
import moment from 'moment'

export default function Main() {

    const today = moment();
    const month = today.month() + 1;
    const date = today.date();
    const day = today.day();
    var first = date - day
    console.log(first);

    const { id } = useParams();
    console.log(id);
    const todate = parseInt(first) + parseInt(id);
    const menulist = dummy.content && dummy.content.filter(content => content.date === String(todate))
    console.log(menulist);
    console.log(todate)

    return(
        <div className="Main">
            <div className='flex-container2'>
                <div className='box'>
                    <div className='flex-container3'>
                        <img className='fork' src={fork} alt=""></img>
                        <div className="today">{month}월 {Number(todate)}일의 조식</div>
                    </div>
                    <ul className="content">
                        {menulist && menulist.map(content => (
                        <p key={content.date}>
                            {content.breakfast} 
                        </p>
                        ))}
                    </ul>
                </div>
                <div className='box'>
                <div className='flex-container3'>
                    <img className='fork' src={fork} alt=""></img>
                    <div className="today">{month}월 {Number(todate)}일의 중식</div>
                </div>
                <ul className="content">
                    {menulist && menulist.map(content => (
                    <p key={content.date}>
                        {content.lunch}
                    </p>
                    ))}
                </ul>
                </div>
                <div className='box'>
                    <div className='flex-container3'>
                        <img className='fork' src={fork} alt=""></img>
                        <div className="today">{month}월 {Number(todate)}일의 석식</div>
                    </div>
                    <ul className="content">
                        {menulist && menulist.map(content => (
                        <p key={content.date}>
                            {content.dinner}
                        </p>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}