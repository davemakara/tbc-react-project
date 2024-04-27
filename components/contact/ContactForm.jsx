"use client";

const ContactForm = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="block w-full md:w-2/5 bg-mainDarkBG p-[15px] md:p-[30px]"
    >
      <input
        type="text"
        id="firstName"
        name="firstName"
        placeholder="First Name"
        className="w-full text-[16px] py-[14px] px-[12px] my-[5px] text-[#000]"
      />
      <input
        type="text"
        id="lastName"
        name="lastName"
        placeholder="Last Name"
        className="w-full text-[16px] py-[14px] px-[12px] my-[5px] text-[#000]"
      />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email Address"
        className="w-full text-[16px] py-[14px] px-[12px] my-[5px] text-[#000]"
      />
      <input
        type="number"
        id="number"
        name="number"
        placeholder="Phone Number"
        className="w-full text-[16px] py-[14px] px-[12px] my-[5px] text-[#000]"
      />
      <div className="flex items-start py-[15px] text-white text-[14px]">
        <input
          type="checkbox"
          id="agree-checkbox"
          name="agree-checkbox"
          className="mr-[10px]"
        />
        <label htmlFor="agree-checkbox">
          By clicking the button, I agree with the collection and processing of
          my personal data as described in the Privacy policy. *
        </label>
      </div>
      <div>
        <button
          type="submit"
          className="w-full bg-green text-white text-[16px] p-[14px] my-[5px] font-semibold border-none cursor-pointer transition-all duration-300 ease hover:bg-red"
        >
          SUBMIT
        </button>
      </div>
    </form>
  );
};
export default ContactForm;
