function Header({setPage}: {setPage: (n: number) => void;}) {
  return (
    <div className="header button" onClick={() => setPage(0)}>
      wimamitudbe
    </div>
  )
}

export default Header
