import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { HelpCircle } from "lucide-react";

interface FAQPageProps {
  user: any;
}

export function FAQPage({ user }: FAQPageProps) {
  const faqs = [
    {
      question: "How do I get started with the platform?",
      answer: "Simply sign up for an account, choose your learning path, and start with our beginner-friendly courses. Our AI mentor will guide you through the process."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes! We offer a 7-day free trial with access to all basic features. No credit card required to start."
    },
    {
      question: "Can I learn at my own pace?",
      answer: "Absolutely! Our platform is designed for self-paced learning. You can access content anytime and progress at your own speed."
    },
    {
      question: "What programming languages are covered?",
      answer: "We cover popular languages including JavaScript, Python, Java, C++, React, Node.js, and many more. New languages are added regularly."
    },
    {
      question: "How do I get help if I'm stuck?",
      answer: "You can use our AI mentor for instant help, join community discussions, or reach out to our support team for personalized assistance."
    },
    {
      question: "Are there certificates available?",
      answer: "Yes! You can earn certificates upon completing courses and projects. These certificates are recognized by industry professionals."
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
        <p className="text-muted-foreground">Find answers to common questions</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5" />
            Common Questions
          </CardTitle>
          <CardDescription>
            Browse through our most frequently asked questions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
