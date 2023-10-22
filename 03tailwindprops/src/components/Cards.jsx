const Cards = () => {
  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
      <img
        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">Delba</h1>
        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          View Profile →
        </button>
      </div>
    </div>
  );
};

export default Cards;

/*
--- <div></div> (container div) ---
h-[400px] <---> arbitrary values of height

--- <img /> ---
z-0 <---> Z-Index - Utilities for controlling the stack order of an element.
h-full <---> Use h-full to set an element’s height to 100% of its parent, as long as the parent has a defined height.
object-cover <---> Resize an element’s content to cover its container

--- <div> under <img /> tag ---
absolute <---> absolute to position an element outside of the normal flow of the document, causing neighboring elements to act as if the element doesn’t exist.
absolute inset-0 <---> Fill entire parent
bg-gradient-to-t <---> linear-gradient to top
bg-gradient-to-t from-gray-900 to-transparent <---> নিচের থেকে উপরের দিকে gradient হবে , রং grey-৯০০ থেকে transparent হবে 

--- <div> of texts </div> ----
bottom-4	bottom: 1rem; //16px <---> parent div er bottom the 16px upore thakbe
left-4
text-left

--- <p></p> ---
mt-2 <---> margin top

--- <button></button> ---
inline-flex

*/
