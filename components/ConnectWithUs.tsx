import { useEffect, useState } from 'react';

export type ConnectWithUsType = {
  className?: string;
};

const ConnectWithUs: React.FC<ConnectWithUsType> = ({ className = "" }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    companyName: '',
    position: '',
    message: ''
  });

  const [emailStyle, setEmailStyle] = useState<React.CSSProperties>({ borderBottom: "1px solid gray" });
  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth < 800) {

        setEmailStyle({ marginTop: "1.5rem", borderBottom: "1px solid gray" });


      } else {

        setEmailStyle({ borderBottom: "1px solid gray" });

      }
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name || !formData.email) {
      alert('Please fill in all required fields (Name and Email)');
      return;
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send message');
      }

      const data = await response.json();

      if (data.success) {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          country: '',
          companyName: '',
          position: '',
          message: ''
        });
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert(error instanceof Error ? error.message : 'Failed to send message');
    }
  };


  return (
    <div
      id="contactUs"
      data-section="contactUs"
      className="contact-us-section w-full mx-auto px-8 flex flex-row bg-none gap-[10rem] mq1050:flex-col-reverse mq1050:gap-[4rem]"
    >
      {/* Left side - Form */}
      <div className="flex-1">
        <form
          className="grid grid-cols-2 gap-x-10 gap-y-10 form pl-[2rem] mq1050:w-[90%] mq450:w-[85%]  mq1050:pl-[1rem] mq800:ml-[-1rem]"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={formData.name}
              onChange={handleChange}
              style={{ borderBottom: "1px solid gray" }}
              className="border-b border-gray-500 pb-3 outline-none text-lg placeholder:text-gray-800 text-muted-foreground opacity-50 text-[17px] border-b border-gray-400"
            />
          </div>
          <div className="flex flex-col" >
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              style={emailStyle}
              className="border-b border-gray-200 pb-3 outline-none text-lg placeholder:text-gray-800 text-muted-foreground opacity-50 text-[17px] border-b border-gray-400"
            />
          </div>
          <div className="flex flex-col mt-7">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              style={{ borderBottom: "1px solid gray" }}
              className="border-b border-gray-200 pb-3 outline-none text-lg placeholder:text-gray-800 text-muted-foreground opacity-50 text-[17px] border-b border-gray-400"
            />
          </div>
          <div className="flex flex-col mt-7">
            <input
              type="text"
              name="country"
              placeholder="Country*"
              value={formData.country}
              onChange={handleChange}
              style={{ borderBottom: "1px solid gray" }}
              className="border-b border-gray-200 pb-3 outline-none text-lg placeholder:text-gray-800 text-muted-foreground opacity-50 text-[17px] border-b border-gray-400"
            />
          </div>
          <div className="flex flex-col mt-7">
            <input
              type="text"
              name="companyName"
              placeholder="Company Name*"
              value={formData.companyName}
              onChange={handleChange}
              style={{ borderBottom: "1px solid gray" }}
              className="border-b border-gray-200 pb-3 outline-none text-lg placeholder:text-gray-800 text-muted-foreground opacity-50 text-[17px] border-b border-gray-400"
            />
          </div>
          <div className="flex flex-col mt-7">
            <input
              type="text"
              name="position"
              placeholder="Position*"
              value={formData.position}
              onChange={handleChange}
              style={{ borderBottom: "1px solid gray" }}
              className="border-b border-gray-200 pb-3 outline-none text-lg placeholder:text-gray-800 text-muted-foreground opacity-50 text-[17px] border-b border-gray-400"
            />
          </div>
          <div className="col-span-2 flex flex-col mt-7">
            <input
              type="text"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              style={{ borderBottom: "1px solid gray" }}
              className="border-b border-gray-200 pb-3 outline-none text-lg placeholder:text-gray-800 text-muted-foreground opacity-50 text-[17px] border-b border-gray-400"
            />
          </div>
          <div>
            <button
              style={{ cursor: "pointer" }}
              type="submit"
              className="mt-6 md:w-[20%] text-[20px] rounded-[5px] px-12 py-3 border border-gray-800 text-gray-800 flex justify-center items-center bg-transparent"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Right side - Text */}
      <div className="flex-1 ml-0 md:ml-[10rem] md:block mq1050:flex mq1050:items-center mq1050:justify-center">
        <h2 className="text-[3rem] font-bold leading-[1.1] text-gray-900 m-0 mq470:text-[2rem] mq470:leading-[2.438rem] mq700:ml-[-6rem] mq700:text-center mq700:text-[2rem]">
          Connect with us!
          <br />
          <span className="mq1050:hidden"> Let's Grow..</span>
        </h2>
        <p className="text-gray-800 mt-6 text-lg leading-relaxed max-w-[70%] w-[60%] opacity-50 mq1050:hidden">
          We prioritize responding to your inquiries promptly to ensure you receive
          the assistance you need in a timely manner.
        </p>
      </div>
    </div>
  );
};

export default ConnectWithUs;