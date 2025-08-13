const keyWordsData = [
  ["만남 빈도,", "음주,", "연락 빈도,", "연락 방식,", "데이트,"],
  ["장거리 연애 가능 여부,", "SNS,", "갈등 해결 방식,", "일 중요도,"],
  ["음주,", "연락 빈도,", "연락 방식,", "커밍아웃 범위,"],
];

export default function ValuePickKeywords() {
  return (
    <div className="items-center flex flex-col gap-3 absolute bottom-0 w-full text-5xl leading-16 text-[#6C7073] font-semibold [mask-image:linear-gradient(to_bottom,black,transparent)] [mask-repeat:no-repeat] [mask-size:100%_100%] z-0">
      {keyWordsData.map((row, i) => (
        <div key={i} className="flex gap-7 justify-center whitespace-nowrap">
          {row.map((e) => (
            <div key={e}>{e}</div>
          ))}
        </div>
      ))}
    </div>
  );
}
