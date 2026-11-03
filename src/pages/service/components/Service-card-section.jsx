import ServiceCard from '../../../components/ServiceCard'

function ServiceCardList (){
    return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-auto md:px-16 md:py-10 px-6 py-4">

           <ServiceCard />       
           <ServiceCard />       
           <ServiceCard />       
           <ServiceCard />       

                    </div>
    );


}


export default ServiceCardList;