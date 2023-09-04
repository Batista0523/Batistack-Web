import React from 'react';

const Services = () => {
    const servicesData = [
        {
            title: 'Batistasck Development',
            description : 'We create custom websites tailored to our clients needs.',

    },
    {
        title: 'Interface Desing',
        description: 'We desing attractive and functional interface to enhance user experience.',
    },
    {
        title: 'Performance Optimization',
        description: 'We improve website perfomance for faster and more efficient loading'
    }
]
    return (
        <div className='services'>
            <h2>Our Services</h2>
            <div className='services-list'>
              {servicesData.map((service, index) => (
                <div className='service' key={index}>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                </div>
              ))}
            </div>
        </div>
    );
}

export default Services;
