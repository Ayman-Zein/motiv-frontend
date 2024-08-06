const Heading = ({ text }: { text: string }) => {
  return (
    <h1 className="font-sans font-bold text-3xl text-black capitalize w-full">
      {text}
    </h1>
  );
};

export default Heading;
