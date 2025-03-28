import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Faq = () => {
  return (
    <div className="p-3 md:mx-20 my-10 flex space-x-5">
      <div className="w-[45%] px-3 py-8 hover:translate-x-1 hover:-translate-y-1">
        <img src="assets/faq.png" alt="" />
      </div>
      <div className="p-3 w-[55%]">
        <h1 className="text-center text-2xl font-bold text-green-800 mb-5">
          Frequently Asked Questions
        </h1>
        <div className="">
          <Accordion className="space-y-2">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="border border-black">
                What is the best time of the year to go paragliding in Pokhara?
              </Accordion.Header>
              <Accordion.Body>
                The paragliding season in Pokhara generally runs from early
                October through to the beginning of May. However, the peak
                months for paragliding are November and December due to the
                stable thermals and clear visibility.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header className="border border-black">
                Is paragliding in Pokhara safe?
              </Accordion.Header>
              <Accordion.Body>
                Yes, paragliding is generally safe in Pokhara. The paragliding
                companies in Pokhara prioritize safety and employ experienced
                and internationally certified pilots. However, as with any
                adventure sport, there are inherent risks. Always ensure that
                you fly with a reputable company that follows all safety
                protocols.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header className="border border-black hover:bg-yellow-100">
                Do I need to have experience or training to go paragliding in
                Pokhara?
              </Accordion.Header>
              <Accordion.Body>
                No, you do not need experience or training to go paragliding in
                Pokhara. Tandem paragliding flights allow beginners to fly with
                an experienced pilot who controls the paraglider.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header className="border border-black hover:bg-yellow-100">
                What should I wear for paragliding in Pokhara?
              </Accordion.Header>
              <Accordion.Body>
                Your should wear any comfortable, sporty clothing and sturdy
                shoes. As it can get chilly in the air, it’s recommended to
                dress in layers or wear a windproof jacket.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header className="border border-black hover:bg-yellow-100">
                How long does a typical paragliding flight last?
              </Accordion.Header>
              <Accordion.Body>
                A standard tandem flight lasts between 20-30 minutes, depending
                on the weather conditions. However, longer flights can be
                arranged with some operators.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header className="border border-black hover:bg-yellow-100">
                What is the weight limit for paragliding?
              </Accordion.Header>
              <Accordion.Body>
                The weight limit for paragliding usually falls between 25 kg and
                90 kg, but it can vary depending on the operator and specific
                flight conditions. It’s best to check with the paragliding
                operators directly.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
