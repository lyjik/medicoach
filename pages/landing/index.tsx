/* eslint-disable @typescript-eslint/no-explicit-any */
import ActiveLogo from "@/assets/dark-logo.svg";
import Logo from "@/assets/logo-horizon.svg";
import CHPlayIcon from "@/assets/imgs/CH Play.svg";
import AppleIcon from "@/assets/imgs/Apple.svg";
import MenImg from "@/assets/imgs/1.png";
import WomenImg from "@/assets/imgs/2.png";
import MenImg2 from "@/assets/imgs/3.png";
import WoMenImg2 from "@/assets/imgs/4.png";
import Phone1 from "@/assets/imgs/Phone-1.png";
import Phone2 from "@/assets/imgs/Phone-2.png";
import Phone3 from "@/assets/imgs/Phone-3.png";
import Phone4 from "@/assets/imgs/Phone-4.png";
import Phone5 from "@/assets/imgs/Phone-5.png";
import Divider from "@/assets/imgs/divider.png";
import QuoteWhite from "@/assets/imgs/quote-white.png";
import AffiliateIcon from "@/assets/imgs/Col.png";
import AffiliateMobileIcon from "@/assets/imgs/Col-mobile.png";
import Facebook from "@/assets/imgs/Facebook.png";
import Instagram from "@/assets/imgs/Instagram.png";
import Youtube from "@/assets/imgs/Youtube.png";
import FooterIcon from "@/assets/imgs/CI.svg";
import VerticalDivider from "@/assets/imgs/vertical-divider.png";
import "./index.scss";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import {
  List,
  Box,
  ListItem,
  ListItemButton,
  Drawer,
  IconButton,
  styled,
} from "@mui/material";
import Hls from "hls.js";

const links = {
  apple: import.meta.env.VITE_REDIRECT_APPLE_URL,
  google: import.meta.env.VITE_REDIRECT_GOOGLE_URL,
  base: import.meta.env.VITE_REDIRECT_BASE_APP_URL,
};

const style = {
  footerInformation: {
    color: "#ffffff",
    opacity: "0.6",
    fontWeight: "400",
    WebkitFontSmoothing: "antialiased",
    fontSize: "16px",
    lineHeight: "24px",
    marginBottom: "6px",
    textDecoration: "none",
  },
};

const LandingPage = () => {
  return (
    <>
      <GeneralLayout />

      <MobileLayout />
    </>
  );
};

const GeneralLayout = () => {
  const [activeNavbar, setActiveNavbar] = useState<boolean>(false);
  const videoRef: any = useRef();

  useEffect(() => {
    const hls = new Hls();

    if (Hls.isSupported()) {
      // hls.log = true;
      const introUrl =
        "https://bufmyswrnvep24860834.cdn.ntruss.com/landing-page/intro3.m3u8";
      if (videoRef && videoRef.current) hls.attachMedia(videoRef.current);
      hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        hls.loadSource(introUrl);
      });
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        videoRef && videoRef.current && videoRef.current.play();
      });
    }

    const element = document.querySelector(".general .video-wrapper") as any;
    const nav = document?.querySelector(".general nav");
    let lastScrollTop = 0;

    document.addEventListener("scroll", () => {
      if (element!.scrollTop < lastScrollTop) {
        return;
      }

      lastScrollTop = element!.scrollTop <= 0 ? 0 : element!.scrollTop;

      if (document!.documentElement.scrollTop >= element!.offsetHeight) {
        nav!.classList.add("active");
        setActiveNavbar(true);
      } else {
        nav!.classList.remove("active");
        setActiveNavbar(false);
      }
    });
  }, []);

  const handleVideoLoad = () => {
    const video = document.querySelector(".general #myVideo");

    if (video)
      video.addEventListener(
        "loadeddata",
        function () {
          const qrSide = document.querySelector(".general .qr-side");
          if (qrSide) qrSide.classList.add("fade-in");
        },
        false
      );
  };

  useEffect(() => {
    handleVideoLoad();
  }, []);
  return (
    <div className="general" style={{ position: "relative" }}>
      <div
        style={{
          position: "fixed",
          top: "0",
          right: "0",
          left: "0",
          zIndex: "1",
        }}
      >
        <nav>
          <div>
            <img src={!activeNavbar ? Logo : ActiveLogo} alt="Logo" />
            <ul className="menu text-center">
              <li>
                <a target="_blank" href="https://tresbiencompany.oopy.io">
                  회사 소개
                </a>
              </li>
              <li>
                <a
                  // href="#"
                  onClick={() =>
                    document.querySelector(".future-section")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  서비스 소개
                </a>
              </li>
              <li>
                <Link to="/inquiry">제휴문의</Link>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://martinmoon.tistory.com/"
                  className="button-link"
                  style={{
                    background: activeNavbar ? "#090A0B" : "rgba(0, 0, 0, 0.2)",
                    color: "#FFFFFF",
                    textShadow: "none",
                  }}
                >
                  블로그
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* Section 1 */}
      <div className="video-wrapper text-center">
        <video autoPlay loop muted id="myVideo" ref={videoRef} playsInline />

        <div className="card-store">
          <div className="text-side text-white">
            <h1
              className="title"
              style={{
                lineHeight: "48px",
                fontSize: "36px",
                textShadow: "1px 1px 1px rgba(0, 0, 0, 0.6)",
              }}
            >
              나를 위한 맞춤형 영양제
              <br />
              찾고 계신가요?
            </h1>
            <p
              className="content mt-2"
              style={{
                lineHeight: "28px",
                fontWeight: "400",
                WebkitFontSmoothing: "antialiased",
                textShadow: "1px 1px 1px rgba(0, 0, 0, 0.6)",
              }}
            >
              개인건강데이터를 기반으로
              <br />내 주변 약사에게 영양제 상담을 진행해 보세요
            </p>
          </div>
          <div className="qr-side">
            <button
              className="store-btn"
              onClick={() => (window.location = links.google)}
              style={{
                borderColor: "transparent",
                background: "rgba(0, 0, 0, 0.2)",
              }}
            >
              <img src={CHPlayIcon} alt="ch-play-icon" />
              <label>Google Play</label>
            </button>
            <button
              className="store-btn"
              onClick={() => (window.location = links.apple)}
              style={{
                borderColor: "transparent",
                background: "rgba(0, 0, 0, 0.2)",
              }}
            >
              <img src={AppleIcon} alt="app-store-icon" />
              <label>App Store</label>
            </button>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="feedback-section">
        <div>
          <div className="feedback-row" style={{ marginBottom: "64px" }}>
            <h3
              className="title text-center"
              style={{
                marginBottom: "32px",
                fontSize: "30px",
                color: "#534678",
                lineHeight: "40px",
                fontWeight: "700",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              약사와 함께 하는 맞춤형 영양제 상담
            </h3>
            <div className="feedback-row-item">
              <div className="feedback-card bg-blue">
                <div className="feedback-card-content">
                  <img src={QuoteWhite} />
                  <p className="feedback-text">
                    건강검진에서 고혈압 의심이 나왔는데
                    <br />
                    혈압수치를 낮추는데 도움되는 영양제는 뭘까?
                  </p>
                  <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex flex-column align-self-center">
                      <p className="username">이근식</p>
                      <p className="userage">50세, 용인 거주</p>
                    </div>
                    <img src={MenImg} alt="men" />
                  </div>
                </div>
              </div>
              <div className="feedback-card bg-green">
                <div className="feedback-card-content">
                  <img src={QuoteWhite} />
                  <p className="feedback-text">
                    하루에 영양제만 5개.
                    <br />
                    추가하거나 뺄 건 없을까?
                  </p>
                  <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex flex-column align-self-center">
                      <p className="username">조윤서</p>
                      <p className="userage">32세, 마포 거주</p>
                    </div>
                    <img src={WomenImg} alt="women" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="feedback-row">
            <h3
              className="title text-center"
              style={{
                marginBottom: "32px",
                fontSize: "30px",
                color: "#534678",
              }}
            >
              복약 관리도 스마트하게
            </h3>
            <div className="feedback-row-item">
              <div className="feedback-card bg-purple">
                <div className="feedback-card-content">
                  <img src={QuoteWhite} />
                  <p className="feedback-text">
                    꾸준히 약 복용하고 싶지만
                    <br />
                    깜빡하고 놓칠 때가 많아요
                  </p>
                  <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex flex-column align-self-center">
                      <p className="username">박수만</p>
                      <p className="userage">41세, 대구 거주</p>
                    </div>
                    <img src={MenImg2} alt="men" />
                  </div>
                </div>
              </div>
              <div className="feedback-card bg-orange">
                <div className="feedback-card-content">
                  <img src={QuoteWhite} />
                  <p className="feedback-text">
                    약 복용 시 주의 음식, 부작용, <br />
                    상호작용 약물을 알고 싶어요
                  </p>
                  <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex flex-column align-self-center">
                      <p className="username">이숙희</p>
                      <p className="userage">50세, 의정부 거주</p>
                    </div>
                    <img src={WoMenImg2} alt="women" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="future-section">
        <div className="future-card">
          <div style={{ padding: "128px 32px" }}>
            <div className="d-flex flex-row">
              <img
                src={Phone1}
                alt="feature-image-1"
                style={{ height: "500px", width: "500px" }}
              />
              <div
                className="d-flex flex-column align-self-center"
                style={{ paddingLeft: "40px" }}
              >
                <h3
                  className="title"
                  style={{
                    fontSize: "30px",
                    marginBottom: "32px",
                    lineHeight: "40px",
                    color: "#364C73",
                  }}
                >
                  건강검진 결과를 손쉽게
                  <br />
                  불러올 수 있어요
                </h3>
                <div className="d-flex flex-row">
                  <p
                    className="content"
                    style={{
                      fontWeight: "400",
                      WebkitFontSmoothing: "antialiased",
                      lineHeight: "28px",
                      fontSize: "18px",
                    }}
                  >
                    모으기 힘든 건강데이터를 간편문자인증 만으로 확인 가능
                  </p>
                </div>
              </div>
            </div>
            <img
              alt="divider"
              src={Divider}
              style={{
                height: "1px",
                width: "100%",
                marginTop: "56px",
                marginBottom: "56px",
              }}
            />
            <div className="d-flex flex-row" style={{ padding: "0 18px" }}>
              <div
                className="d-flex flex-column align-self-center"
                style={{ paddingLeft: "40px" }}
              >
                <h3
                  className="title"
                  style={{
                    fontSize: "30px",
                    marginBottom: "32px",
                    color: "#364C73",
                  }}
                >
                  1년 전부터 먹은 약을 한번에
                  <br />
                  불러올 수 있어요
                </h3>
                <div className="d-flex flex-row">
                  <p
                    className="content"
                    style={{
                      fontWeight: "400",
                      WebkitFontSmoothing: "antialiased",
                      fontSize: "18px",
                      lineHeight: "28px",
                    }}
                  >
                    병원에서 처방받은 약 정보를 간편문자인증 만으로 확인 가능
                  </p>
                </div>
              </div>
              <img
                src={Phone2}
                alt="feature-image-2"
                style={{ height: "500px", width: "500px" }}
              />
            </div>
            <img
              alt="divider"
              src={Divider}
              style={{
                height: "1px",
                width: "100%",
                marginTop: "56px",
                marginBottom: "56px",
              }}
            />
            <div className="d-flex flex-row">
              <img
                src={Phone3}
                alt="feature-image-3"
                style={{ height: "500px", width: "500px" }}
              />
              <div
                className="d-flex flex-column align-self-center"
                style={{ paddingLeft: "40px" }}
              >
                <h3
                  className="title"
                  style={{
                    fontSize: "30px",
                    marginBottom: "32px",
                    lineHeight: "40px",
                    color: "#364C73",
                  }}
                >
                  추가적인 설문으로 더 상세한
                  <br />
                  영양제 추천을 받아보세요
                </h3>
                <div className="d-flex flex-row">
                  <p
                    className="content"
                    style={{
                      fontWeight: "400",
                      WebkitFontSmoothing: "antialiased",
                      lineHeight: "28px",
                      fontSize: "18px",
                    }}
                  >
                    건강검진, 복약기록으로 알 수 없는 건강정보는
                    <br />
                    설문으로 더욱 정확하게 상담 가능
                  </p>
                </div>
              </div>
            </div>
            <img
              alt="divider"
              src={Divider}
              style={{
                height: "1px",
                width: "100%",
                marginTop: "56px",
                marginBottom: "56px",
              }}
            />
            <div className="d-flex flex-row" style={{ padding: "0 18px" }}>
              <div
                className="d-flex flex-column align-self-center"
                style={{ paddingLeft: "40px" }}
              >
                <h3
                  className="title"
                  style={{
                    fontSize: "30px",
                    marginBottom: "32px",
                    color: "#364C73",
                  }}
                >
                  약사님이 직접 상담하는
                  <br />
                  영양제 추천으로 건강을 챙기세요
                </h3>
                <div className="d-flex flex-row">
                  <p
                    className="content"
                    style={{
                      fontWeight: "400",
                      WebkitFontSmoothing: "antialiased",
                      fontSize: "18px",
                      lineHeight: "28px",
                    }}
                  >
                    약사님의 전문적인 영양학적 상담과 개인 맞춤형 영양제 추천
                  </p>
                </div>
              </div>
              <img
                src={Phone4}
                alt="feature-image-2"
                style={{ height: "500px", width: "500px" }}
              />
            </div>
            <img
              alt="divider"
              src={Divider}
              style={{
                height: "1px",
                width: "100%",
                marginTop: "56px",
                marginBottom: "56px",
              }}
            />
            <div className="d-flex flex-row">
              <img
                src={Phone5}
                alt="feature-image-3"
                style={{ height: "500px", width: "500px" }}
              />
              <div
                className="d-flex flex-column align-self-center"
                style={{ paddingLeft: "40px" }}
              >
                <h3
                  className="title"
                  style={{
                    fontSize: "30px",
                    marginBottom: "32px",
                    lineHeight: "40px",
                    color: "#364C73",
                  }}
                >
                  놓치기 쉬운 섭취 관리,
                  <br />
                  메디코치로 한번에 해결
                </h3>
                <div className="d-flex flex-row">
                  <p
                    className="content"
                    style={{
                      fontWeight: "400",
                      WebkitFontSmoothing: "antialiased",
                      lineHeight: "28px",
                      fontSize: "18px",
                    }}
                  >
                    복용약 알림설정과 부작용, 충돌약 정보, 주의음식까지 안내
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div className="summary-section">
        <div className="align-self-center" style={{ padding: "160px 0" }}>
          <div className="d-flex flex-row" style={{ padding: "0 32px" }}>
            <div
              className="d-flex flex-column align-self-center"
              style={{ width: "510px" }}
            >
              <h3
                className="title"
                style={{
                  fontSize: "30px",
                  marginBottom: "32px",
                  marginTop: "16px",
                  color: "#FBDFCA",
                  lineHeight: "40px",
                }}
              >
                건강을 위한 가장 똑똑한 방법
                <br />
                벌써 많은 고객님이 시작하고 있어요
              </h3>
              <p
                className="content"
                style={{
                  fontWeight: "400",
                  WebkitFontSmoothing: "antialiased",
                  marginBottom: "12px",
                  color: "#FFFFFF",
                  fontSize: "18px",
                  lineHeight: "28px",
                }}
              >
                나의 건강기록을 토대로 내 주변 약사에게
                <br />
                손쉽게 상담받고 평생 건강 챙겨가세요
              </p>
              <div className="d-flex flex-row" style={{ marginTop: "48px" }}>
                <button
                  className="store-btn"
                  onClick={() => (window.location = links.google)}
                >
                  <img src={CHPlayIcon} alt="ch-play-icon" />
                  <label>Google Play</label>
                </button>
                <button
                  className="store-btn"
                  onClick={() => (window.location = links.apple)}
                >
                  <img src={AppleIcon} alt="app-store-icon" />
                  <label>App Store</label>
                </button>
              </div>
            </div>
            {/* style={{marginBottom: 9px; margin-top: 9px" */}
            <div className="d-flex flex-row" style={{ marginLeft: "48px" }}>
              {/* <video controls={true}>
                <source src="https://www.youtube.com/watch?v=aqz-KE-bpKQ" />
              </video> */}
              <iframe
                width="510"
                height="510"
                src="https://www.youtube.com/embed/3nHUPNdGenI?si=djsFkxC6ZHZR3D12"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{
                  borderRadius: "40px",
                }}
              ></iframe>
              {/* <img
                className="align-self-center"
                src={Video}
                alt="Video"
                style={{ height: "494px", width: "494px" }}
              /> */}
            </div>
          </div>
        </div>
      </div>

      {/* Section 6 */}
      <div className="affiliate-section">
        <div className="d-flex align-self-center">
          <div className="d-flex flex-row">
            <img
              src={AffiliateIcon}
              alt="affiliate-image"
              style={{ height: "790px", width: "696px" }}
            />
            <div
              className="d-flex flex-column align-self-center"
              style={{ marginLeft: "48px" }}
            >
              <h3
                className="title"
                style={{
                  fontSize: "30px",
                  marginBottom: "32px",
                  lineHeight: "40px",
                }}
              >
                제휴 약국 등록하고
                <br />
                메디코치의 파트너가 되어주세요
              </h3>
              <div className="d-flex flex-row" style={{ marginBottom: "32px" }}>
                <p
                  className="content"
                  style={{
                    fontWeight: "400",
                    WebkitFontSmoothing: "antialiased",
                    fontSize: "18px",
                    lineHeight: "28px",
                  }}
                >
                  메디코치와 함께 헬스케어 시장의
                  <br />
                  혁신을 이끌어 갈 약국을 모집합니다.
                </p>
              </div>
              <div>
                <button
                  onClick={() =>
                    window
                      .open("https://hyeongcheolmun04.oopy.io/", "_blank")
                      ?.focus()
                  }
                  style={{
                    borderRadius: "32px",
                    background: "#090a0b",
                    color: "#ffffff",
                    padding: "15.5px 42.5px",
                    borderColor: "transparent",
                    width: "192px",
                    height: "56px",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "700",
                    WebkitFontSmoothing: "antialiased",
                  }}
                >
                  제휴 신청하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div style={{ maxWidth: "1100px", width: "1100px", margin: "0 auto" }}>
          <div
            className="d-flex align-self-center"
            style={{ padding: "128px 0 80px 0", width: "100%" }}
          >
            <div
              className="d-flex flex-column"
              style={{ padding: "0 32px", width: "100%" }}
            >
              <div className="d-flex flex-row">
                <img src={FooterIcon} alt="logo" />
                <p
                  className="content align-self-center"
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    WebkitFontSmoothing: "antialiased",
                    color: "#ffffff",
                    marginLeft: "16px",
                  }}
                >
                  메디코치
                </p>
              </div>
              <div className="d-flex flex-column" style={{ padding: "40px 0" }}>
                <p style={style.footerInformation}>
                  {/* 대표 : 문형철, 신민우, 김현창 */}
                  제휴문의:{" "}
                  <a
                    style={{ color: "white" }}
                    href="mailto:tresbienmartin@gmail.com"
                  >
                    tresbienmartin@gmail.com
                  </a>
                </p>
                <p style={style.footerInformation}>
                  {/* 개인정보관리책임자 : 신민우 */}
                  전화: 0507-1368-3950
                </p>
                <p style={style.footerInformation}>
                  {/* 사업자등록번호 : 375-34-01591 */}
                  회사: tres bien corp.(트레비앙)
                </p>
                <p style={style.footerInformation}>
                  {/* 이메일 : tresbienmartin@gmail.com */}
                  사업자등록번호: 375-34-01591
                </p>
                <p style={style.footerInformation}>
                  {/* 주소 : 경북 구미시 선기로 77, 107동 1104호 */}
                  주소: 서울 남대문로9기 40 센터플레이스 20층 스파크플러스
                </p>
                <p style={style.footerInformation}>
                  {/* 통신판매: - */}대표: 문형철, 신민우
                </p>
                <p style={style.footerInformation}>
                  통신판매업신고번호: -{/* 1:1문의 : 앱 내 24시간 접수가능 */}
                </p>
                <p style={style.footerInformation}>
                  {/* 건강기능식품 일반판매업 및 유통전문판매업 신고 */}
                  건강기능식품 영업신고:&nbsp;
                  <span style={{ textDecoration: "underline" }}>
                    제 2024-0845703
                  </span>
                  &nbsp; 호
                </p>
                <p style={style.footerInformation}>
                  개인정보취급담당자: 신민우
                </p>
              </div>
              <div
                className="d-flex flex-row"
                style={{
                  padding: "20px 0",
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                  background: "rgba(255, 255, 255, 0.00)",
                }}
              >
                <a
                  href="https://www.facebook.com/profile.php?id=61559865255628&is_tour_completed&locale=ko_KR"
                  target="_blank"
                >
                  <img
                    src={Facebook}
                    alt="facebook"
                    style={{ marginRight: "16px" }}
                  />
                </a>
                <a
                  href="https://www.instagram.com/pillsummary/"
                  target="_blank"
                >
                  <img
                    src={Instagram}
                    alt="instagram"
                    style={{ marginRight: "16px" }}
                  />
                </a>
                <a
                  href="https://www.youtube.com/@user-zg4jq3eh3j"
                  target="_blank"
                >
                  <img src={Youtube} alt="youtube" />
                </a>
              </div>
              <div
                className="d-flex flex-row justify-content-between"
                style={{ padding: "40px 0" }}
              >
                <div className="d-flex flex-row" style={{ width: "77%" }}>
                  <a
                    target="_blank"
                    href="https://giant-creature-8ab.notion.site/f6e4eb5bcaee4c9ea0b1ede607880643?pvs=4"
                    style={{
                      color: "#ffffff",
                      fontSize: "16px",
                      fontWeight: "500",
                      WebkitFontSmoothing: "antialiased",
                      textDecoration: "none",
                    }}
                  >
                    이용약관
                  </a>
                  <img
                    src={VerticalDivider}
                    alt="vertical-divider"
                    style={{ marginLeft: "12px", marginRight: "12px" }}
                  />
                  <a
                    target="_blank"
                    href="https://app.catchsecu.com/document/P/64af336a068009b"
                    style={{
                      color: "#ffffff",
                      fontSize: "16px",
                      fontWeight: "500",
                      WebkitFontSmoothing: "antialiased",
                      textDecoration: "none",
                    }}
                  >
                    개인정보처리방침
                  </a>
                </div>
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    WebkitFontSmoothing: "antialiased",
                    color: "#ffffff",
                    opacity: "0.6",
                    width: "23%",
                  }}
                >
                  ⓒ트레비앙 All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: "0",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  minHeight: "unset",
}));

const MobileLayout = () => {
  const [activeNavbar, setActiveNavbar] = useState<boolean>(false);
  const videoRef: MutableRefObject<HTMLVideoElement | null> = useRef(null);

  useEffect(() => {
    const hls = new Hls();

    if (Hls.isSupported()) {
      // hls.log = true;
      const introUrl =
        "https://bufmyswrnvep24860834.cdn.ntruss.com/landing-page/intro3.m3u8";
      if (videoRef && videoRef.current) hls.attachMedia(videoRef.current);
      hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        hls.loadSource(introUrl);
      });
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        videoRef && videoRef.current && (videoRef.current as any).play();
      });
    }

    const element = document.querySelector(".xs .video-wrapper") as any;
    const nav = document?.querySelector(".xs nav");
    let lastScrollTop = 0;

    document.addEventListener("scroll", () => {
      if (element!.scrollTop < lastScrollTop) {
        return;
      }

      lastScrollTop = element!.scrollTop <= 0 ? 0 : element!.scrollTop;

      if (document!.documentElement.scrollTop >= element!.offsetHeight) {
        nav!.classList.add("active");
        setActiveNavbar(true);
      } else {
        nav!.classList.remove("active");
        setActiveNavbar(false);
      }
    });
  }, []);

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const DrawerList = (
    <Box role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <a
              style={{
                textDecoration: "none",
                color: "#383b45",
                fontWeight: "500",
                lineHeight: "26px",
              }}
              target="_blank"
              href="https://tresbiencompany.oopy.io"
            >
              회사 소개
            </a>
          </ListItemButton>
        </ListItem>
        <img
          alt="divider"
          src={Divider}
          style={{
            height: "1px",
            width: "100%",
            marginTop: "12px",
            marginBottom: "12px",
          }}
        />
        <ListItem disablePadding>
          <ListItemButton>
            <a
              style={{
                textDecoration: "none",
                color: "#383b45",
                fontWeight: "500",
                lineHeight: "26px",
              }}
              // href="#"
              onClick={() =>
                document
                  .querySelector(".xs")!
                  .querySelector(".future-section")
                  ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
              }
            >
              서비스 소개
            </a>
          </ListItemButton>
        </ListItem>
        <img
          alt="divider"
          src={Divider}
          style={{
            height: "1px",
            width: "100%",
            marginTop: "12px",
            marginBottom: "12px",
          }}
        />
        <ListItem disablePadding>
          <ListItemButton>
            <Link
              style={{
                textDecoration: "none",
                color: "#383b45",
                fontWeight: "500",
                lineHeight: "26px",
              }}
              to="/inquiry"
            >
              제휴문의
            </Link>
          </ListItemButton>
        </ListItem>
        <img
          alt="divider"
          src={Divider}
          style={{
            height: "1px",
            width: "100%",
            marginTop: "12px",
            marginBottom: "32px",
          }}
        />
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              maxWidth: "128px",
              maxHeight: "44px",
            }}
          >
            <a
              target="_blank"
              href="https://martinmoon.tistory.com/"
              className="button-link"
              style={{
                background: "#648CD5",
                color: "#FFFFFF",
                textDecoration: "none",
                padding: "0",
                width: "128px",
                height: "44px",
              }}
            >
              블로그
            </a>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const handleVideoLoad = () => {
    const video = document.querySelector(".xs #myVideo");

    if (video)
      video.addEventListener(
        "loadeddata",
        function () {
          const qrSide = document.querySelector(".xs .qr-side");
          if (qrSide) qrSide.classList.add("fade-in");
        },
        false
      );
  };

  useEffect(() => {
    handleVideoLoad();
  }, []);

  return (
    <div className="xs" style={{ position: "relative" }}>
      <div
        style={{
          position: "fixed",
          top: "0",
          right: "0",
          left: "0",
          zIndex: "1",
        }}
      >
        <nav>
          <div>
            <img src={!activeNavbar ? Logo : ActiveLogo} alt="Logo" />

            <Button
              onClick={toggleDrawer(true)}
              sx={{
                padding: "0",
                minWidth: "unset",
                width: "44px",
                height: "44px",
                marginTop: "17px",
                marginBottom: "19px",
                borderRadius: "10px",
                background: "rgba(0, 0, 0, 0.20)",
              }}
            >
              <MenuIcon
                sx={{
                  color: activeNavbar ? "#383b45" : "#ffffff",
                }}
              />
            </Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              <DrawerHeader>
                <IconButton
                  onClick={handleDrawerClose}
                  sx={{
                    padding: "26px 26px 36px",
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </DrawerHeader>
              {DrawerList}
            </Drawer>
          </div>
        </nav>
      </div>
      {/* Section 1 */}
      <div className="video-wrapper text-center">
        <video autoPlay loop muted id="myVideo" ref={videoRef} playsInline />

        <div className="card-store">
          <div className="text-side text-white">
            <h1
              className="title"
              style={{
                lineHeight: "40px",
                fontSize: "30px",
                textShadow: "1px 1px 1px rgba(0, 0, 0, 0.6)",
              }}
            >
              나를 위한 맞춤형 영양제
              <br />
              찾고 계신가요?
            </h1>
            <p
              className="content mt-2"
              style={{
                lineHeight: "28px",
                fontWeight: "400",
                WebkitFontSmoothing: "antialiased",
                textShadow: "1px 1px 1px rgba(0, 0, 0, 0.6)",
              }}
            >
              개인건강데이터를 기반으로
              <br />내 주변 약사에게 영양제 상담을 진행해 보세요
            </p>
          </div>
          <div className="qr-side">
            <button
              className="store-btn"
              onClick={() => (window.location = links.google)}
              style={{
                borderColor: "transparent",
                background: "rgba(0, 0, 0, 0.2)",
              }}
            >
              <img src={CHPlayIcon} alt="ch-play-icon" />
              <label>Google Play</label>
            </button>
            <button
              className="store-btn"
              onClick={() => (window.location = links.apple)}
              style={{
                borderColor: "transparent",
                background: "rgba(0, 0, 0, 0.2)",
              }}
            >
              <img src={AppleIcon} alt="app-store-icon" />
              <label>App Store</label>
            </button>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="feedback-section">
        <div>
          <div className="feedback-row" style={{ marginBottom: "64px" }}>
            <h3
              className="title text-center"
              style={{
                marginBottom: "32px",
                fontSize: "24px",
                color: "#534678",
                lineHeight: "32px",
                fontWeight: "700",
                WebkitFontSmoothing: "antialiased",
                maxWidth: "240px",
                margin: "96px auto 24px auto",
              }}
            >
              약사와 함께 하는 맞춤형 영양제 상담
            </h3>
            <div className="feedback-row-item">
              <div className="feedback-card bg-blue">
                <div className="feedback-card-content">
                  <img src={QuoteWhite} />
                  <p className="feedback-text">
                    건강검진에서 고혈압 의심이 나왔는데
                    <br />
                    혈압수치를 낮추는데 도움되는 영양제는 뭘까?
                  </p>
                  <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex flex-column align-self-center">
                      <p className="username">이근식</p>
                      <p className="userage">50세, 용인 거주</p>
                    </div>
                    <img
                      src={MenImg}
                      alt="men"
                      style={{ width: "64px", height: "64px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="feedback-row-item">
              <div className="feedback-card bg-green">
                <div className="feedback-card-content">
                  <img src={QuoteWhite} />
                  <p className="feedback-text">
                    하루에 영양제만 5개.
                    <br />
                    추가하거나 뺄 건 없을까?
                  </p>
                  <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex flex-column align-self-center">
                      <p className="username">조윤서</p>
                      <p className="userage">32세, 마포 거주</p>
                    </div>
                    <img
                      src={WomenImg}
                      alt="women"
                      style={{ width: "80px", height: "80px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="feedback-row" style={{ marginBottom: "96px" }}>
            <h3
              className="title text-center"
              style={{
                marginBottom: "24px",
                fontSize: "24px",
                lineHeight: "32px",
                color: "#534678",
                fontWeight: "700",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              복약 관리도 스마트하게
            </h3>
            <div className="feedback-row-item">
              <div className="feedback-card bg-purple">
                <div className="feedback-card-content">
                  <img src={QuoteWhite} />
                  <p className="feedback-text">
                    꾸준히 약 복용하고 싶지만
                    <br />
                    깜빡하고 놓칠 때가 많아요
                  </p>
                  <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex flex-column align-self-center">
                      <p className="username">박수만</p>
                      <p className="userage">41세, 대구 거주</p>
                    </div>
                    <img
                      src={MenImg2}
                      alt="men"
                      style={{ width: "80px", height: "80px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="feedback-row-item">
              <div className="feedback-card bg-orange">
                <div className="feedback-card-content">
                  <img src={QuoteWhite} />
                  <p className="feedback-text">
                    약 복용 시 주의 음식, 부작용, <br />
                    상호작용 약물을 알고 싶어요
                  </p>
                  <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex flex-column align-self-center">
                      <p className="username">이숙희</p>
                      <p className="userage">50세, 의정부 거주</p>
                    </div>
                    <img
                      src={WoMenImg2}
                      alt="women"
                      style={{ width: "80px", height: "80px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="future-section">
        <div className="future-card">
          <div style={{ padding: "64px 32px 96px 32px" }}>
            <div
              className="d-flex flex-column"
              style={{ alignItems: "center" }}
            >
              <img
                src={Phone1}
                alt="feature-image-1"
                style={{ height: "350px", width: "350px" }}
              />
              <div
                className="d-flex flex-column align-self-center"
                style={{ padding: "32px 0" }}
              >
                <h3
                  className="title"
                  style={{
                    fontSize: "24px",
                    WebkitFontSmoothing: "antialiased",
                    marginBottom: "16px",
                    lineHeight: "32px",
                    color: "#364C73",
                    textAlign: "center",
                  }}
                >
                  건강검진 결과를 손쉽게
                  <br />
                  불러올 수 있어요
                </h3>
                <div className="d-flex flex-row">
                  <p
                    className="content"
                    style={{
                      fontWeight: "400",
                      WebkitFontSmoothing: "antialiased",
                      lineHeight: "24px",
                      fontSize: "16px",
                      textAlign: "center",
                    }}
                  >
                    모으기 힘든 건강데이터를 간편문자인증 만으
                    <br />로 확인 가능
                  </p>
                </div>
              </div>
            </div>
            <img
              alt="divider"
              src={Divider}
              style={{
                height: "1px",
                width: "100%",
                marginBottom: "32px",
              }}
            />
            <div
              className="d-flex flex-column"
              style={{ alignItems: "center" }}
            >
              <img
                src={Phone2}
                alt="feature-image-2"
                style={{ height: "350px", width: "350px" }}
              />
              <div
                className="d-flex flex-column align-self-center"
                style={{ padding: "32px 0" }}
              >
                <h3
                  className="title"
                  style={{
                    fontSize: "24px",
                    WebkitFontSmoothing: "antialiased",
                    marginBottom: "16px",
                    lineHeight: "32px",
                    color: "#364C73",
                    textAlign: "center",
                  }}
                >
                  1년 전부터 먹은 약을 한번에
                  <br />
                  불러올 수 있어요
                </h3>
                <div className="d-flex flex-row">
                  <p
                    className="content"
                    style={{
                      fontWeight: "400",
                      WebkitFontSmoothing: "antialiased",
                      lineHeight: "24px",
                      fontSize: "16px",
                      textAlign: "center",
                    }}
                  >
                    병원에서 처방받은 약 정보를 간편문자인증 만으로 확인 가능
                  </p>
                </div>
              </div>
            </div>
            <img
              alt="divider"
              src={Divider}
              style={{
                height: "1px",
                width: "100%",
                marginBottom: "32px",
              }}
            />
            <div
              className="d-flex flex-column"
              style={{ alignItems: "center" }}
            >
              <img
                src={Phone3}
                alt="feature-image-3"
                style={{ height: "350px", width: "350px" }}
              />
              <div
                className="d-flex flex-column align-self-center"
                style={{ padding: "32px 0" }}
              >
                <h3
                  className="title"
                  style={{
                    fontSize: "24px",
                    WebkitFontSmoothing: "antialiased",
                    marginBottom: "16px",
                    lineHeight: "32px",
                    color: "#364C73",
                    textAlign: "center",
                  }}
                >
                  추가적인 설문으로 더 상세한
                  <br />
                  영양제 추천을 받아보세요
                </h3>
                <div className="d-flex flex-row">
                  <p
                    className="content"
                    style={{
                      fontWeight: "400",
                      WebkitFontSmoothing: "antialiased",
                      lineHeight: "24px",
                      fontSize: "16px",
                      textAlign: "center",
                    }}
                  >
                    건강검진, 복약기록으로 알 수 없는 건강정보는
                    <br />
                    설문으로 더욱 정확하게 상담 가능
                  </p>
                </div>
              </div>
            </div>
            <img
              alt="divider"
              src={Divider}
              style={{
                height: "1px",
                width: "100%",
                marginBottom: "32px",
              }}
            />
            <div
              className="d-flex flex-column"
              style={{ alignItems: "center" }}
            >
              <img
                src={Phone4}
                alt="feature-image-4"
                style={{ height: "350px", width: "350px" }}
              />
              <div
                className="d-flex flex-column align-self-center"
                style={{ padding: "32px 0" }}
              >
                <h3
                  className="title"
                  style={{
                    fontSize: "24px",
                    WebkitFontSmoothing: "antialiased",
                    marginBottom: "16px",
                    lineHeight: "32px",
                    color: "#364C73",
                    textAlign: "center",
                  }}
                >
                  약사님이 직접 상담하는
                  <br />
                  영양제 추천으로 건강을 챙기세요
                </h3>
                <div className="d-flex flex-row">
                  <p
                    className="content"
                    style={{
                      fontWeight: "400",
                      WebkitFontSmoothing: "antialiased",
                      lineHeight: "24px",
                      fontSize: "16px",
                      textAlign: "center",
                    }}
                  >
                    약사님의 전문적인 영양학적 상담과 개인 맞춤형 영양제 추천
                  </p>
                </div>
              </div>
            </div>
            <img
              alt="divider"
              src={Divider}
              style={{
                height: "1px",
                width: "100%",
                // marginTop: "26px",
                marginBottom: "32px",
              }}
            />
            <div
              className="d-flex flex-column"
              style={{ alignItems: "center" }}
            >
              <img
                src={Phone5}
                alt="feature-image-5"
                style={{ height: "350px", width: "350px" }}
              />
              <div
                className="d-flex flex-column align-self-center"
                style={{ padding: "32px 0" }}
              >
                <h3
                  className="title"
                  style={{
                    fontSize: "24px",
                    WebkitFontSmoothing: "antialiased",
                    marginBottom: "16px",
                    lineHeight: "32px",
                    color: "#364C73",
                    textAlign: "center",
                  }}
                >
                  놓치기 쉬운 섭취 관리,
                  <br />
                  메디코치로 한번에 해결
                </h3>
                <div className="d-flex flex-row">
                  <p
                    className="content"
                    style={{
                      fontWeight: "400",
                      WebkitFontSmoothing: "antialiased",
                      lineHeight: "24px",
                      fontSize: "16px",
                      textAlign: "center",
                    }}
                  >
                    복용약 알림설정과 부작용, 충돌약 정보, 주의음식까지 안내
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div className="summary-section">
        <div className="align-self-center" style={{ padding: "96px 0" }}>
          <div className="d-flex flex-column">
            <div className="d-flex flex-column align-self-center">
              <h3
                className="title"
                style={{
                  fontSize: "24px",
                  marginBottom: "16px",
                  color: "#FBDFCA",
                  lineHeight: "32px",
                  textAlign: "center",
                }}
              >
                건강을 위한 가장 똑똑한 방법
                <br />
                벌써 많은 고객님이 시작하고 있어요
              </h3>
              <p
                className="content"
                style={{
                  fontWeight: "400",
                  WebkitFontSmoothing: "antialiased",
                  color: "#FFFFFF",
                  fontSize: "16px",
                  lineHeight: "24px",
                  textAlign: "center",
                }}
              >
                나의 건강기록을 토대로 내 주변 약사에게
                <br />
                손쉽게 상담받고 평생 건강 챙겨가세요
              </p>
              <div className="d-flex flex-row" style={{ marginTop: "32px" }}>
                <button
                  className="store-btn"
                  onClick={() => (window.location = links.google)}
                >
                  <img src={CHPlayIcon} alt="ch-play-icon" />
                  <label>Google Play</label>
                </button>
                <button
                  className="store-btn"
                  onClick={() => (window.location = links.apple)}
                >
                  <img src={AppleIcon} alt="app-store-icon" />
                  <label>App Store</label>
                </button>
              </div>
            </div>
            <div className="d-flex flex-row" style={{ paddingTop: "56px" }}>
              <iframe
                width="100%"
                height="350px"
                src="https://www.youtube.com/embed/3nHUPNdGenI?si=Y8FjDX7M4zBqOE7y"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{
                  borderRadius: "40px",
                }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Section 6 */}
      <div className="affiliate-section">
        <div className="d-flex align-self-center flex-column">
          <div
            className="d-flex flex-column"
            style={{ padding: "96px 20px 0" }}
          >
            <div
              className="d-flex flex-column"
              style={{
                // marginLeft: "30px",
                // marginTop: "16px",
                marginBottom: "16px",
              }}
            >
              <h3
                className="title"
                style={{
                  fontSize: "24px",
                  marginBottom: "16px",
                  lineHeight: "32px",
                }}
              >
                제휴 약국 등록하고
                <br />
                메디코치의 파트너가 되어주세요
              </h3>
              <div className="d-flex flex-row" style={{ marginBottom: "32px" }}>
                <p
                  className="content"
                  style={{
                    fontWeight: "400",
                    WebkitFontSmoothing: "antialiased",
                    fontSize: "16px",
                    lineHeight: "24px",
                  }}
                >
                  메디코치와 함께 헬스케어 시장의
                  <br />
                  혁신을 이끌어 갈 약국을 모집합니다.
                </p>
              </div>
              <div>
                <button
                  onClick={() =>
                    window
                      .open("https://hyeongcheolmun04.oopy.io/", "_blank")
                      ?.focus()
                  }
                  style={{
                    borderRadius: "32px",
                    background: "#090a0b",
                    color: "#D3DDF0",
                    padding: "0",
                    borderColor: "transparent",
                    width: "172px",
                    height: "56px",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "700",
                    WebkitFontSmoothing: "antialiased",
                  }}
                >
                  제휴 신청하기
                </button>
              </div>
            </div>
          </div>
          <img
            src={AffiliateMobileIcon}
            alt="affiliate-image"
            style={{ width: "100%" }}
          />
        </div>
      </div>

      <div className="footer">
        <div style={{ margin: "0 auto" }}>
          <div
            className="d-flex align-self-center"
            style={{ padding: "96px 0 80px 0", width: "100%" }}
          >
            <div
              className="d-flex flex-column"
              style={{ padding: "0 20px", width: "100%" }}
            >
              <div className="d-flex flex-row">
                <img src={FooterIcon} alt="logo" height={40} />
                <p
                  className="content align-self-center"
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    WebkitFontSmoothing: "antialiased",
                    color: "#ffffff",
                    marginLeft: "16px",
                  }}
                >
                  메디코치
                </p>
              </div>
              <div className="d-flex flex-column" style={{ padding: "32px 0" }}>
                <p style={style.footerInformation}>
                  {/* 대표 : 문형철, 신민우, 김현창 */}
                  제휴문의:{" "}
                  <a
                    style={{ color: "white" }}
                    href="mailto:tresbienmartin@gmail.com"
                  >
                    tresbienmartin@gmail.com
                  </a>
                </p>
                <p style={style.footerInformation}>
                  {/* 개인정보관리책임자 : 신민우 */}
                  전화: 0507-1368-3950
                </p>
                <p style={style.footerInformation}>
                  {/* 사업자등록번호 : 375-34-01591 */}
                  회사: tres bien corp.(트레비앙)
                </p>
                <p style={style.footerInformation}>
                  {/* 이메일 : tresbienmartin@gmail.com */}
                  사업자등록번호: 375-34-01591
                </p>
                <p style={style.footerInformation}>
                  {/* 주소 : 경북 구미시 선기로 77, 107동 1104호 */}
                  주소: 서울 남대문로9기 40 센터플레이스 20층 스파크플러스
                </p>
                <p style={style.footerInformation}>
                  {/* 통신판매: - */}대표: 문형철, 신민우
                </p>
                <p style={style.footerInformation}>
                  통신판매업신고번호: -{/* 1:1문의 : 앱 내 24시간 접수가능 */}
                </p>
                <p style={style.footerInformation}>
                  {/* 건강기능식품 일반판매업 및 유통전문판매업 신고 */}
                  건강기능식품 영업신고:&nbsp;
                  <span style={{ textDecoration: "underline" }}>
                    제 2024-0845703
                  </span>
                  &nbsp; 호
                </p>
                <p style={style.footerInformation}>
                  개인정보취급담당자: 신민우
                </p>
              </div>
              <div
                className="d-flex flex-row"
                style={{
                  padding: "20px 0",
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                  background: "rgba(255, 255, 255, 0.00)",
                }}
              >
                <a
                  href="https://www.facebook.com/profile.php?id=61559865255628&is_tour_completed&locale=ko_KR"
                  target="_blank"
                  style={{ marginRight: "16px" }}
                >
                  <img src={Facebook} alt="facebook" />
                </a>
                <a
                  href="https://www.instagram.com/pillsummary/"
                  target="_blank"
                  style={{ marginRight: "16px" }}
                >
                  <img src={Instagram} alt="instagram" />
                </a>
                <a
                  href="https://www.youtube.com/@user-zg4jq3eh3j"
                  target="_blank"
                >
                  <img src={Youtube} alt="youtube" />
                </a>
              </div>
              <div
                className="d-flex flex-row justify-content-between"
                style={{ paddingTop: "40px" }}
              >
                <div className="d-flex flex-row">
                  <a
                    target="_blank"
                    href="https://giant-creature-8ab.notion.site/f6e4eb5bcaee4c9ea0b1ede607880643?pvs=4"
                    style={{
                      color: "#ffffff",
                      fontSize: "16px",
                      fontWeight: "500",
                      WebkitFontSmoothing: "antialiased",
                      textDecoration: "none",
                      lineHeight: "24px",
                    }}
                  >
                    이용약관
                  </a>
                  <img
                    src={VerticalDivider}
                    alt="vertical-divider"
                    style={{ marginLeft: "12px", marginRight: "12px" }}
                  />
                  <a
                    target="_blank"
                    href="https://app.catchsecu.com/document/P/64af336a068009b"
                    style={{
                      color: "#ffffff",
                      fontSize: "16px",
                      fontWeight: "500",
                      WebkitFontSmoothing: "antialiased",
                      textDecoration: "none",
                      lineHeight: "24px",
                    }}
                  >
                    개인정보처리방침
                  </a>
                </div>
              </div>
              <div
                className="d-flex flex-row justify-content-between"
                style={{ paddingTop: "12px", paddingBottom: "40px" }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "24px",
                    WebkitFontSmoothing: "antialiased",
                    color: "#ffffff",
                    opacity: "0.6",
                  }}
                >
                  ⓒ트레비앙 All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
