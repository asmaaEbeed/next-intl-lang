
const IdNumber = ({ id }: { id: string }) => {
  return (
    <div className="bg-gray-50 text-gray-600 w-[30px] h-[30px] rounded-full flex items-center justify-center text-sm leading-[100%]">
      {id}
    </div>
  );
};

export default IdNumber;
