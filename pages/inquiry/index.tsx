import "./index.scss";
import logo1 from "@/assets/inquiry/logo1.png";
import logo2 from "@/assets/inquiry/logo2.png";
import section2_img1 from "@/assets/inquiry/section2_img1.png";
import section2_img2 from "@/assets/inquiry/section2_img2.png";
import section2_img3 from "@/assets/inquiry/section2_img3.png";
import section2_img4 from "@/assets/inquiry/section2_img4.png";

const InquiryPage = () => {
  return (
    <div className="inquiry">
      <section className="section1">
        <div className="logo imgBox">
          <img src={logo1} alt="logo1" />
        </div>
        <h2>
          나를 위한 맞춤 건강코치 <span>메디코치</span>
          <br/>
          파트너약국과의 동반성장을 약속드립니다!
        </h2>
      </section>
      <section className="section2">
        <div className="title">
          <div className="imgBox">
            <img src={logo2} alt="logo2" />
          </div>
          <h3>회원 혜택</h3>
        </div>
        <div className="contentContainer">
          <div className="content">
            <div className="contentText">
              <h4><span>1</span>건강데이터 기반 상담 프로그램 제공</h4>
              <p>
                고객의 10년 치 건강검진결과, 1년 이내 처방전정보, 유전자 정보를 조회하고 맞춤 건강 상담을 진행 할 수 있는 프로그램을 제공해 드립니다.<br></br>
                <span>• 고객에게 전문성, 신뢰성 높은 상담을 할 수 있습니다.</span>
              </p>
            </div>
            <div className="contentImage">
              <img src={section2_img1} alt="section2_img1" />
            </div>
          </div>
          <div className="content">
            <div className="contentText">
              <h4><span>2</span>PB제품 제공(구독형)으로 추가 수익 확보</h4>
              <p>
                소분형태로 제공하는 성분별 개인 맞춤형 건강기능식품 메디코치(구독판매 방식)를 통해 지속적인 수익을 창출 할 수 있습니다.<br></br>
                <span>• 이제 완제품 뿐 아니라 구독판매로 약국 매출을 높일 수 있습니다.</span>
              </p>
            </div>
            <div className="contentImage">
              <img src={section2_img2} alt="section2_img2" />
            </div>
          </div>
          <div className="content">
            <div className="contentText">
              <h4><span>3</span>온라인채널을 활용한 상권 외 고객 유치</h4>
              <p>
                메디코치 APP으로 온라인상담 & 판매가 이루어져 지역 상권에 관계없이 많은 고객을 유치 할 수 있습니다.<br></br>
                <span>• 메디코치 본사에서 약국 상호로 배송하는 중앙배송시스템을 갖추었습니다.</span>
              </p>
            </div>
            <div className="contentImage">
              <img src={section2_img3} alt="section2_img3" />
            </div>
          </div>
          <div className="content">
            <div className="contentText">
              <h4><span>4</span>편리한 소통, 단골고객 관리</h4>
              <p>
                메디코치는 온/오프라인 고객관리를 통한 우리동네 단골약국 및 주치약사 로서의 경쟁력을 만들어 드립니다.<br></br>
                <span>• 메디코치는 상담프로그램을 통한 지속적인 고객관리를 도와드립니다.</span>
              </p>
            </div>
            <div className="contentImage">
              <img src={section2_img4} alt="section2_img4" />
            </div>
          </div>
        </div>
      </section>
      <section className="section3"> 
        <div className="title">
          <div className="imgBox">
            <img src={logo2} alt="logo2" />
          </div>
          <h3>가입 신청</h3>
        </div>
        <div className="contentContainer">
          <div className="content">
            <div className="contentText">
              <h4>
                01
              </h4>
              <p>
                가입 신청
              </p>
            </div>
          </div>
          <div className="content">
            <div className="contentText">
              <h4>
                02
              </h4>
              <p>
                약사님 개별 상담
              </p>
            </div>
          </div>
          <div className="content">
            <div className="contentText">
              <h4>
                03
              </h4>
              <p>
                서비스 이용계약
              </p>
            </div>
          </div>
          <div className="content">
            <div className="contentText">
              <h4>
                04
              </h4>
              <p>
                활용가이드제공<br></br>
                및 시스템 등록
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section4">
        <div className="contentContainer">
          <h3>
            국내 최초, 건강데이터 기반 <br className="brMob"></br>맞춤영양제 구독 서비스<br></br> 메디코치의 파트너약국이 되어 보세요!
          </h3>
          <iframe 
            src="https://script.google.com/macros/s/AKfycbwddw8N2DCpUy2X0rofxOic3CRmYkq69TNCZDmHaMvX22UMrdrHyc2LYn6fO1cE4NGUUQ/exec" 
            frameBorder="0" 
          />
        </div>
      </section>
    </div>
  );
};



export default InquiryPage;