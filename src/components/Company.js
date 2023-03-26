import React from 'react';
import companyImage from '../assets/images/company.jpg';

function Company() {
  return (
    <section className="company" id="company">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={companyImage} alt="company" className="company-image" />
          </div>
          <div className="col-md-6">
            <h2>Our Company</h2>
            <p>
              DripStream is a dynamic software house that specializes in creating innovative IT solutions for a variety of
              industries. Our flagship project, DripMotors.com, is a cutting-edge platform for buying and selling cars online,
              connecting car enthusiasts from around the world with the vehicles they love.
            </p>
            <p>
              At DripStream, we pride ourselves on our ability to stay at the forefront of technological advancements. We employ a
              diverse range of tools and techniques to develop our products, including artificial intelligence, machine learning,
              and advanced analytics. Our team consists of some of the most talented and experienced IT professionals in the
              industry, each bringing their unique skills and perspectives to the table.
            </p>
            <p>
              We are passionate about solving complex challenges, and we thrive on the opportunity to take on new and exciting
              projects. Our team is always on the lookout for the next big thing, whether it's developing cutting-edge new features
              for DripMotors.com or exploring new technologies that can help us better serve our clients.
            </p>
            <p>
              At DripStream, we are committed to providing our clients with the best possible service. We understand that in today's
              fast-paced world, time is of the essence, and we work hard to ensure that our products are user-friendly and
              intuitive, making it easy for our clients to buy and sell cars online. Our platform is designed to be robust,
              reliable, and scalable, ensuring that it can handle the needs of both small and large businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Company;