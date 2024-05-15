export const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading1:
    "font-poppins font-bold xs:text-[80px] text-[52px] text-balanpy xs:leading-[76.8px] leading-[66.8px] w-full",

  heading2:
    "font-poppins font-semibold xs:text-[62px] text-[70px] xs:leading-[60px] leading-[52px] w-full",

  heading3:
    "font-poppins font-semibold xs:text-[44px] text-[32px] text-black xs:leading-[50px] leading-[42px] w-full",

  heading4:
    "font-poppins font-semibold xs:text-[20px] text-[40px] text-black xs:leading-[24px] leading-[70px] w-full",

  paragraph: "font-poppins font-medium text-black text-[18px] leading-[32px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;