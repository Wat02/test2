import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1" className="pt-[1rem] pb-[1rem]">
        <AccordionTrigger className="text-[1.5rem] leading-[1.1em] font-semibold uppercase">
          Product Information
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="text-[1.1rem] leading-[1.6em] md:leading-[1.6em] font-normal w-full md:w-[70%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            mollitia ad inventore delectus quidem, impedit aperiam. Consequatur
            placeat minima ad ratione, quisquam quam? Molestias quasi sunt
            soluta alias vero possimus.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="pt-[1rem] pb-[1rem]">
        <AccordionTrigger className="text-[1.5rem] leading-[1.1em] font-semibold uppercase w-full">
          Shipping Details
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="text-[1.1rem] leading-[1.6em] md:leading-[1.6em] font-normal w-full md:w-[70%]">
            We offer worldwide shipping through trusted courier partners.
            Standard delivery takes 3-5 business days, while express shipping
            ensures delivery within 1-2 business days.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-[1.5rem] leading-[1.1em] font-semibold uppercase w-full">
          Return Policy
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p className="text-[1.1rem] leading-[1.6em] md:leading-[1.6em] font-normal w-full md:w-[70%]">
            We stand behind our products with a comprehensive 30-day return
            policy. If you&apos;re not completely satisfied, simply return the
            item in its original condition.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
