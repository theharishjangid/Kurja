import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function Testimonials() {
  const testimonials = [
    {
        "quote": "Our living room is now the perfect blend of elegance and comfort. The team's expertise exceeded all our expectations!",
        "name": "Ravi Patel",
        "designation": "Homeowner, Bengaluru",
        "src": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "quote": "Transforming our office space into a modern, productive environment was seamless with their guidance. Highly recommended!",
        "name": "Ananya Sharma",
        "designation": "Entrepreneur, Ahmedabad",
        "src": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "quote": "The kitchen makeover was a dream come true! Every corner reflects both beauty and functionality.",
        "name": "Priya Iyer",
        "designation": "Chef, Chennai",
        "src": "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "quote": "Thanks to their brilliant designs, our home now feels like a luxury retreat. Exceptional work!",
        "name": "Arjun Mehta",
        "designation": "Architect, Mumbai",
        "src": "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "quote": "The attention to detail and thoughtful layout of our new home interior has left us speechless. Absolutely delighted!",
        "name": "Neha Gupta",
        "designation": "IT Professional, Delhi",
        "src": "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]
;
  return <AnimatedTestimonials testimonials={testimonials} />;
}
