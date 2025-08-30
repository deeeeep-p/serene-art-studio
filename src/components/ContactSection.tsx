import { useRef, useState } from "react";
import { Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { Form } from "react-router-dom";

const ContactSection = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // });
  const form = useRef();

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get the form element from the event
    const formElement = e.currentTarget;

    // Check if form is valid (this should already be done by browser, but good to double-check)
    if (!formElement.checkValidity()) {
      formElement.reportValidity();
      return;
    }

    // Send email using EmailJS
    emailjs
      .sendForm(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        formElement, // Use the form element from the event
        {
          publicKey: import.meta.env.VITE_APP_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast({
            title: "Message sent successfully!",
            description:
              "Thank you for your interest. I will get back to you as soon as possible.",
          });

          // Reset the form
          formElement.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast({
            title: "Error sending message ☹️",
            description:
              "There was an issue sending your message. Please try again later.",
          });
        }
      );
  };

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  return (
    <section id="contact" className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground animate-fade-in">
            Let's Create Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            Looking for custom artwork that speaks to you? Let’s collaborate on
            something beautiful.{" "}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-serif font-bold mb-8 text-foreground">
              Get in Touch
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="p-3 bg-accent rounded-lg mr-4">
                  <Mail className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground">artbyagnya@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="p-3 bg-accent rounded-lg mr-4">
                  <MapPin className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Studio</h4>
                  <p className="text-muted-foreground">
                    Mumbai, India
                    <br />
                    Available by appointment
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">
                Follow My Work
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/theagnyart?igsh=cGw3bDd5NWRjZTN3&utm_source=qr"
                  className="p-3 bg-card rounded-lg shadow-soft hover:shadow-medium transition-smooth hover:scale-105"
                  aria-label="Follow on Instagram"
                >
                  <Instagram className="w-5 h-5 text-accent-foreground" />
                </a>

                <a
                  href="https://www.youtube.com/@theagnyart"
                  className="p-3 bg-card rounded-lg shadow-soft hover:shadow-medium transition-smooth hover:scale-105"
                  aria-label="YouTube channel"
                >
                  <Youtube className="w-5 h-5 text-accent-foreground" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up">
            {/* <form ref={form} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                    name="user_name"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    // value={formData.name}
                    // onChange={handleChange}
                    className="shadow-soft"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                    name="user_email"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    // value={formData.email}
                    // onChange={handleChange}
                    className="shadow-soft"
                  />
                </div>
                
              </div>

              <div>
                <label
                  htmlFor="subject"
                  name="subject"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  name="subject"
                  required
                  // value={formData.subject}
                  // onChange={handleChange}
                  placeholder="Commission inquiry, question, etc."
                  className="shadow-soft"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  // value={formData.message}
                  // onChange={handleChange}
                  placeholder="Tell me about your project, space, timeline, and any specific ideas you have in mind..."
                  className="min-h-[120px] shadow-soft"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:shadow-medium hover:scale-105 transition-smooth"
                onClick={handleSubmit}
              >
                Send Message
              </Button>
            </form> */}
            <form ref={form} className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                    name="user_name"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    // value={formData.name}
                    // onChange={handleChange}
                    className="shadow-soft"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                    name="user_email"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    // value={formData.email}
                    // onChange={handleChange}
                    className="shadow-soft"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact"
                    className="block text-sm font-medium text-foreground mb-2"
                    name="user_contact"
                  >
                    Contact
                  </label>
                  <Input
                    id="contact"
                    name="contact"
                    type="tel" // or "text" if you want general contact info
                    // value={formData.contact}
                    // onChange={handleChange}
                    className="shadow-soft"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  name="subject"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  name="subject"
                  required
                  // value={formData.subject}
                  // onChange={handleChange}
                  placeholder="Commission inquiry, question, etc."
                  className="shadow-soft"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  // value={formData.message}
                  // onChange={handleChange}
                  placeholder="Tell me about your project, space, timeline, and any specific ideas you have in mind..."
                  className="min-h-[120px] shadow-soft"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:shadow-medium hover:scale-105 transition-smooth"
              >
                Send Message
              </Button>
           
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
