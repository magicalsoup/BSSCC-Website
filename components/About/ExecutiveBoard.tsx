import ExecutiveCard from "./ExecutiveCard";

export default function ExecBoard({ ExecData }) {
  return (
    <div className="flex justify-center py-24">
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-4 xl:gap-x-16 md:gap-y-16">
        {ExecData.map((exec, index) => (
          <ExecutiveCard executive={exec} key={index} />
        ))}
      </div>
    </div>
  );
}
