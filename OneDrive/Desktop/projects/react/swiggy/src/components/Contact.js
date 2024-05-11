const Contact = () => {
  return (
    <div>
        <h1 className="font-bold text-3xl m-4 p-4">Contact us page</h1>
        <form>
          <input type="text" placeholder="name" className="border border-black rounded-md m-2 p-2 " />
          <input type="text" placeholder="message" className="border border-black rounded-md m-2 p-2 " />
          <button className="border border-black rounded-md m-2 p-2 bg-green-300" >Submit</button>
        </form>
    </div>
  );
};

export default Contact;
