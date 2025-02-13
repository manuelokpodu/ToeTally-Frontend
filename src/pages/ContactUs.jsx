import ContactForm from "../components/contactUs/ContactForm";
import Hero from "../components/contactUs/Hero";
import PromoModal from "../components/contactUs/PromoModal";
import MapComponent from "../components/map/MapComponent";
import Subscribe from "../components/Subscribe";

export default function ContactUs() {
    return (
        <>
        <div className="w-full mx-auto 2xl:container relative">
            
         
            <div className="md:absolute md:top-0 md:left-0 md:w-full md:z-50">
                <PromoModal />
            </div>

            <Hero />
            <ContactForm />

            <div className="mt-4">
                <MapComponent height="250px" />
            </div>

            <div className="lg:-mt-10">
                <Subscribe />
            </div>

        </div>
        </>
    );
}

