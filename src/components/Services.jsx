import Title from "./Title";
import { services } from "../datas";
import Service from "./Service";
function Services() {
  return (
    <section className="section services" id="services">
      <Title title="Our" subTitle="Services" />

      <div className="section-center services-center">
        {services.map((service) => {
          return <Service key={service.id} {...service} />;
        })}
      </div>
    </section>
  );
}

export default Services;
