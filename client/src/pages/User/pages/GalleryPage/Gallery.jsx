import Container from "../WelcomePage/components/Container";
import GalleryBg from "../../../../assets/img/gallery/gallerybg.jpg";

const Gallery = () => {
    return (
        <div className="pt-[80px]">
            <div className="relative">
                <img
                    className="w-[100vw] h-[92vh] object-cover object-[0px_-500px] "
                    src={GalleryBg}
                    alt=""
                />
                <div className="absolute top-0 text-center w-full p-[50px] flex items-center justify-center h-full flex-col pb-[200px] gap-[20px]">
                    <div className="text-[100px] font-[500] leading-[100px] text-white uppercase">
                        Галерея робіт
                    </div>
                    <hr className="border-white w-[15%]" />
                    <div className="text-[24px] w-[70%] text-light font-[200]">
                        Це яскравий приклад того, як ми втілюємо ваші мрії у
                        реальність. Кожен проєкт унікальний, адже створений з
                        урахуванням індивідуальних потреб, стилю та простору
                        наших клієнтів.
                    </div>
                </div>
            </div>
            <Container></Container>
        </div>
    );
};

export default Gallery;
