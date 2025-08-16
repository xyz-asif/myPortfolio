import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "CEO, TechVision Inc",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        quote: "Asif doesn't just deliver, he delivers with perfection. His attention to detail and innovative solutions have transformed our digital presence."
    },
    {
        name: "Michael Chen",
        role: "Founder, InnovateLabs",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
        quote: "Working with Asif was a game-changer. His technical expertise and creative approach brought our vision to life."
    },
    {
        name: "Emma Thompson",
        role: "CTO, Future Systems",
        image: "https://randomuser.me/api/portraits/women/3.jpg",
        quote: "Exceptional talent! Asif's ability to solve complex problems while maintaining clean, efficient code is remarkable."
    },
    {
        name: "David Rodriguez",
        role: "Director of Engineering, CodeCraft",
        image: "https://randomuser.me/api/portraits/men/4.jpg",
        quote: "The quality of work and professional communication made our collaboration seamless. Highly recommended!"
    },
    {
        name: "Lisa Wang",
        role: "Product Manager, GlobalTech",
        image: "https://randomuser.me/api/portraits/women/5.jpg",
        quote: "Asif brings both technical excellence and creative innovation to every project. A true professional!"
    },
    {
        name: "James Wilson",
        role: "Founder, StartupHub",
        image: "https://randomuser.me/api/portraits/men/6.jpg",
        quote: "Outstanding work ethic and technical skills. Asif consistently exceeds expectations."
    }
];

const Testimonials = () => {
    return (
        <div className="w-full overflow-hidden bg-background py-20">
            <h2 className="text-4xl font-bold text-center mb-12">What People Say</h2>
            <div className="relative">
                <motion.div
                    className="flex gap-6 px-4"
                    animate={{
                        x: [0, -2000],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[400px] bg-card p-6 rounded-xl shadow-lg"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    width={60}
                                    height={60}
                                    className="rounded-full"
                                />
                                <div>
                                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                                    <p className="text-muted-foreground">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-foreground/80 italic">"{testimonial.quote}"</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Testimonials;