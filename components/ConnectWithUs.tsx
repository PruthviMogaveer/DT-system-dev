import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export type ConnectWithUsType = {
  className?: string;
};

const ConnectWithUs: React.FC<ConnectWithUsType> = ({ className = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    companyName: "",
    position: "",
    message: "",
  });

  const [emailStyle, setEmailStyle] = useState<React.CSSProperties>({
    borderBottom: "1px solid gray",
  });
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
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.country ||
      !formData.companyName ||
      !formData.position
    ) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      // Format email body
      const emailBody = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || "Not provided",
        country: formData.country,
        companyName: formData.companyName,
        position: formData.position,
        message: formData.message || "Not provided",
      };

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: `New Contact Form Submission from ${formData.name}`,
          body: emailBody,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Thank you for your message. We will get back to you soon!");
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          country: "",
          companyName: "",
          position: "",
          message: "",
        });
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(
        "Sorry, there was an error sending your message. Please try again later."
      );
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }
    }
  };

  const formContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const slideIn = {
    initial: { x: 100, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }
    }
  };

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, amount: 0.3 }}
      id="contactUs"
      data-section="contactUs"
      className="contact-us-section w-full mx-auto px-8 flex flex-row bg-none gap-[10rem] mq1050:flex-col-reverse mq1050:gap-[4rem]"
    >
      {/* Left side - Form */}
      <motion.div 
        variants={formContainer}
        className="flex-1"
      >
        <motion.form
          className="grid grid-cols-2 gap-x-10 gap-y-10 form pl-[2rem] mq1050:w-[90%] mq450:w-[85%] mq1050:pl-[1rem] mq800:ml-[-1rem]"
          onSubmit={handleSubmit}
        >
          {/* Wrap each input in motion.div */}
          <motion.div variants={fadeInUp} className="flex flex-col">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              value={formData.name}
              onChange={handleChange}
              style={{ borderBottom: "1px solid gray" }}
              className="border-b border-gray-500 pb-3 outline-none text-lg placeholder:text-gray-800 text-muted-foreground opacity-50 text-[17px] border-b border-gray-400"
            />
          </motion.div>
          <motion.div variants={fadeInUp} className="flex flex-col">
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              style={emailStyle}
              className="border-b border-gray-200 pb-3 outline-none text-lg placeholder:text-gray-800 text-muted-foreground opacity-50 text-[17px] border-b border-gray-400"
            />
          </motion.div>
          <motion.div variants={fadeInUp} className="flex flex-col mt-7">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              style={{ borderBottom: "1px solid gray" }}
              className="border-b border-gray-200 pb-3 outline-none text-lg placeholder:text-gray-800 text-muted-foreground opacity-50 text-[17px] border-b border-gray-400"
            />
          </motion.div>
          <motion.div variants={fadeInUp} className="flex flex-col mt-7">
            <input
              type="text"
              name="country"
              placeholder="Country*"
              value={formData.country}
              onChange={handleChange}
              style={{ borderBottom: "1px solid gray" }}
              className="border-b border-gray-200 pb-3 outline-none text-lg placeholder:text-gray-800 text-muted-foreground opacity-50 text-[17px] border-b border-gray-400"
            />
          </motion.div>
          <motion.div variants={fadeInUp} className="flex flex-col mt-7">
            <input
              type="text"
              name="companyName"
              placeholder="Company Name*"
              value={formData.companyName}
              onChange={handleChange}
              style={{ borderBottom: "1px solid gray" }}
              className="border-b border-gray-200 pb-3 outline-none text-lg placeholder:text-gray-800 text-muted-foreground opacity-50 text-[17px] border-b border-gray-400"
            />
          </motion.div>
          <motion.div variants={fadeInUp} className="flex flex-col mt-7">
            <input
              type="text"
              name="position"
              placeholder="Position*"
              value={formData.position}
              onChange={handleChange}
              style={{ borderBottom: "1px solid gray" }}
              className="border-b border-gray-200 pb-3 outline-none text-lg placeholder:text-gray-800 text-muted-foreground opacity-50 text-[17px] border-b border-gray-400"
            />
          </motion.div>
          <motion.div variants={fadeInUp} className="col-span-2 flex flex-col mt-7">
            <input
              type="text"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              style={{ borderBottom: "1px solid gray" }}
              className="border-b border-gray-200 pb-3 outline-none text-lg placeholder:text-gray-800 text-muted-foreground opacity-50 text-[17px] border-b border-gray-400"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <button
              style={{ cursor: "pointer" }}
              type="submit"
              className="mt-6 md:w-[20%] text-[20px] rounded-[5px] px-12 py-3 border border-gray-800 text-gray-800 flex justify-center items-center bg-transparent"
            >
              Submit
            </button>
          </motion.div>
        </motion.form>
      </motion.div>

      {/* Right side - Text */}
      <motion.div 
        variants={slideIn}
        className="flex-1 ml-0 md:ml-[10rem] md:block mq1050:flex mq1050:items-center mq1050:justify-center"
      >
        <motion.h2 
          variants={fadeInUp}
          className="text-[3rem] font-bold leading-[1.1] text-gray-900 m-0 mq470:text-[2rem] mq470:leading-[2.438rem] mq700:ml-[-6rem] mq700:text-center mq700:text-[2rem]"
        >
          Connect with us!
          <br />
          <span className="mq1050:hidden"> Let's Grow..</span>
        </motion.h2>
        <motion.p 
          variants={fadeInUp}
          className="text-gray-800 mt-6 text-lg leading-relaxed max-w-[70%] w-[60%] opacity-50 mq1050:hidden"
        >
          We prioritize responding to your inquiries promptly to ensure you
          receive the assistance you need in a timely manner.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default ConnectWithUs;
