const Header = () => {
  const producsAmount = 1;

  return (
    <header className="flex flex-row items-center justify-between bg-zinc-900  px-20 py-3 text-white">
      <h1 className="text-xl font-bold">ReduxCart</h1>
      <div className="flex flex-row gap-5 rounded-md border border-solid border-teal-500 px-6 py-1">
        <p className="items-center text-sm font-bold text-teal-500">My Cart</p>
        <p className="rounded-2xl bg-teal-500 px-3 text-sm font-bold  text-zinc-900 ">
          {producsAmount}
        </p>
      </div>
    </header>
  );
};

export default Header;
