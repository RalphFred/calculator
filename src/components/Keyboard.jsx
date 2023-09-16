import Key from "./Key";

export default function Keyboard({ onButtonClick, onEqualsClick, onClearClick }) {  
  return (
    <div className="h-[55vh] flex flex-col justify-between p-2">
      <div className="flex justify-around">
        <Key style="text-red-400 bg-tint font-bold text-3xl w-[80px] h-[80px] flex items-center pl-5 rounded-full" content="AC" onClick={onClearClick}/>
        <Key style="text-green-600 bg-tint font-bold text-3xl w-[80px] h-[80px] flex items-center justify-center rounded-full" content="()" onClick={onButtonClick}/>
        <Key style="text-green-600 bg-tint font-bold text-3xl w-[80px] h-[80px] flex items-center justify-center rounded-full" content="%" onClick={onButtonClick}/>
        <Key style="text-green-600 bg-tint font-bold text-3xl w-[80px] h-[80px] flex items-center justify-center rounded-full" content="÷" onClick={onButtonClick}/>
      </div>
      <div className="flex justify-around">
        <Key style="text-green-600 bg-tint font-bold text-3xl w-[80px] h-[80px] flex items-center justify-center rounded-full" content="7" onClick={onButtonClick}/>
        <Key style="text-green-600 bg-tint font-bold text-3xl w-[80px] h-[80px] flex items-center justify-center rounded-full" content="8" onClick={onButtonClick}/>
        <Key style="text-green-600 bg-tint font-bold text-3xl w-[80px] h-[80px] flex items-center justify-center rounded-full" content="9" onClick={onButtonClick}/>
        <Key style="text-green-600 bg-tint font-bold text-3xl w-[80px] h-[80px] flex items-center justify-center rounded-full" content="X" onClick={onButtonClick}/>
      </div>
      <div className="flex justify-around">
        <Key style="text-green-600 bg-tint font-bold text-3xl w-[80px] h-[80px] flex items-center justify-center rounded-full" content="4" onClick={onButtonClick}/>
        <Key style="text-green-600 bg-tint font-bold text-3xl w-[80px] h-[80px] flex items-center justify-center rounded-full" content="5" onClick={onButtonClick}/>
        <Key style="text-green-600 bg-tint font-bold text-3xl w-[80px] h-[80px] flex items-center justify-center rounded-full" content="6" onClick={onButtonClick}/>
        <Key style="text-green-600 bg-tint font-bold text-3xl w-[80px] h-[80px] flex items-center justify-center rounded-full" content="-" onClick={onButtonClick}/>
      </div>
      <div className="flex justify-around">
        <Key style="text-green-600 bg-tint font-bold text-3xl w-[80px] h-[80px] flex items-center justify-center rounded-full" content="1" onClick={onButtonClick}/>
        <Key style="text-green-600 bg-tint font-bold text-3xl w-[80px] h-[80px] flex items-center justify-center rounded-full" content="2" onClick={onButtonClick}/>
        <Key style="text-green-600 bg-tint font-bold text-3xl w-[80px] h-[80px] flex items-center justify-center rounded-full" content="3" onClick={onButtonClick}/>
        <Key style="text-green-600 bg-tint font-bold text-3xl w-[80px] h-[80px] flex items-center justify-center rounded-full" content="+" onClick={onButtonClick}/>
      </div>
      <div className="flex justify-around">
        <Key style="text-green-600 bg-tint font-bold text-3xl w-[180px] h-[80px] flex items-center pl-7 rounded-full" content="0" onClick={onButtonClick}/>
        <Key style="text-green-600 bg-tint font-bold text-3xl w-[80px] h-[80px] flex items-center justify-center rounded-full" content="." onClick={onButtonClick}/>
        <Key style="text-green-600 bg-tint font-bold text-3xl w-[80px] h-[80px] flex items-center justify-center rounded-full" content="=" onClick={onEqualsClick}/>
      </div>
    </div>
  );
}
