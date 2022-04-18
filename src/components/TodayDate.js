import "../css/TodayDate.css";

export default function TodayDate() {
  const date = new Date();
  return (
    <h1 className="date">
      {`${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`}
    </h1>
  );
}
