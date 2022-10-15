
function App() {
  //dinamic value
  const title = "welcome to my app";
  const age = 20;
  const link = "https://github.com/yusuparipin30/";
  return (
    <div>
     <h1>{title}</h1>
     <h1>{age * 3}</h1>
     <a href={link}>Go To Github Yusuf</a>
    </div>
  );
}

export default App;
