import Image from 'next/image';
import '../styles/activitypage.css';

function ActivityCreatedPage() {
  return (
    <section className="activity-createdPage">
            <div className="activity-date">
                <div className="calender-image">
                    <Image
                        src="/images/activity/Calendar.png"
                        alt="calender icon"
                        width={24}
                        height={24}
                    />
                </div>
                <div className="date">
                    <span>Jan 23, 2021</span>
                </div>
            </div>
            <div className="activity-week">
                <div className="today">
                    <span>Today</span>
                </div>
                <div className="week">
                    <span>Week</span>
                </div>
                <div className="month">
                    <span>Month</span>
                </div>
                <div className="year">
                    <span>2020</span>
                </div>
            </div>
        </section>
  )
}

export default ActivityCreatedPage