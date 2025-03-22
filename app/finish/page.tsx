"use client";

import Link from "next/link";
import { IoRocketSharp } from "react-icons/io5";
// import { FaFacebook } from "react-icons/fa";
// import { FaFacebookMessenger } from "react-icons/fa";

// import { usePDF } from "react-to-pdf";
import { useContext, useEffect, useState } from "react";
import { PrimaryContext } from "@/utils/MainContext";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
  Image,
  Font,
} from "@react-pdf/renderer";

export default function Finish() {
  const { quiz } = useContext(PrimaryContext);

  // const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  const [correctsWithoutImage, setCorrectsWithoutImage] = useState<Quiz[]>([]);
  const [correctsWithImage, setCorrectsWithImages] = useState<Quiz[]>([]);
  // const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const newArr = quiz.filter(
      (item: Quiz) =>
        item.answer === item.myAnswer && item.answer && item.image === ""
    );
    setCorrectsWithoutImage(newArr);
    console.log(newArr);

    const imagesArr = quiz.filter(
      (item: Quiz) =>
        item.answer === item.myAnswer && item.answer && item.image !== ""
    );
    setCorrectsWithImages(imagesArr);

    console.log(imagesArr);
  }, [quiz]);

  // const handlePdf = () => {
  //   setIsVisible(true);
  //   setTimeout(() => {
  //     toPDF();
  //   }, 100);
  //   setTimeout(() => setIsVisible(false), 200);
  // };

  return (
    <div className="!overflow-hidden w-[100vw] h-[100vh] finish">
      <div className="w-[100vw] h-[100vh] overflow-hidden bg-black relative">
        <div className="w-full relative">
          <img
            src="./images/background.png"
            alt="galaxy"
            className="w-full h-[200px]"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[rgba(0,0,0,1)] from-10% to-[rgba(0,0,0,0.7)]"></div>
        </div>
        {/* <img src="./images/paper.png" className="w-[400px]" />
        <div className="w-[400px] h-[200px] bg-[#a88f70]"></div> */}
        <div className="absolute top-[60%] left-[50%] translate-x-[-50%] translate-y-[-60%] w-[80%] py-[70px] px-6 bg-[#1b1a1b] rounded-[34px] flex items-center justify-center flex-col gap-8">
          <h1 className="bold lg:text-[36px] sm:text-[30px] text-[24px] text-white text-center sm:w-[400px]">
            თქვენი გაზეთი მზად არის!
          </h1>
          <IoRocketSharp className="text-[40px] text-white" />
          <Link href={"/review"}>
            <button className="sm:w-[270px] w-[250px] h-[70px] bg-white rounded-[20px] cursor-pointer lg:hover:bg-[#9c9d9c] duration-300">
              მიმოხილვა
            </button>
          </Link>
          <div>
            {typeof window !== "undefined" && (
              <PDFDownloadLink
                document={
                  <MyDocument
                    correctsWithImage={correctsWithImage}
                    correctsWithoutImage={correctsWithoutImage}
                  />
                }
                fileName="example.pdf"
              >
                <button className="sm:w-[270px] w-[250px] h-[70px] bg-white rounded-[20px] cursor-pointer lg:hover:bg-[#9c9d9c] duration-300">
                  გადმოწერა
                </button>
              </PDFDownloadLink>
            )}
          </div>

          {/* <div className="flex flex-col items-center gap-5">
            <p className="regular text-[20px] text-white">
              or share on social media
            </p>
            <div className="flex items-center gap-5">
              <FaFacebook className="text-[40px] text-white cursor-pointer hover:opacity-50 duration-200" />
              <FaFacebookMessenger className="text-[40px] text-white cursor-pointer hover:opacity-50 duration-200" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

const MyDocument = ({
  correctsWithoutImage,
  correctsWithImage,
}: {
  correctsWithoutImage: Quiz[];
  correctsWithImage: Quiz[];
}) => {
  Font.register({
    family: "Georgian",
    src: "/fonts/georgian/NotoSansGeorgian_Condensed-Medium.ttf",
    // /fonts/georgian/NotoSansGeorgian-VariableFont_wdth,wght.ttf
  });

  const currentDate = new Date();

  const englishFormatter = new Intl.DateTimeFormat("ka-GE", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const translations = {
    weekdays: {
      Monday: "ორშაბათი",
      Tuesday: "სამშაბათი",
      Wednesday: "ოთხშაბათი",
      Thursday: "ხუთშაბათი",
      Friday: "პარასკევი",
      Saturday: "შაბათი",
      Sunday: "კვირა",
    },
    months: {
      January: "იანვარი",
      February: "თებერვალი",
      March: "მარტი",
      April: "აპრილი",
      May: "მაისი",
      June: "ივნისი",
      July: "ივლისი",
      August: "აგვისტო",
      September: "სექტემბერი",
      October: "ოქტომბერი",
      November: "ნოემბერი",
      December: "დეკემბერი",
    },
  };

  const englishDate = englishFormatter.format(currentDate);

  let georgianDate = englishDate;
  Object.entries(translations.weekdays).forEach(([en, ka]) => {
    georgianDate = georgianDate.replace(en, ka);
  });
  Object.entries(translations.months).forEach(([en, ka]) => {
    georgianDate = georgianDate.replace(en, ka);
  });

  console.log(georgianDate);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* <View style={styles.mainContainer} wrap> */}
        <View style={styles.backgroundContainer}>
          <Image src={"/images/paper.png"} style={styles.background} />
        </View>
        {/* <View style={styles.child}> */}
        <View style={styles.titleView}>
          <View style={styles.titleChildView}>
            <Text style={{ fontSize: 12, fontFamily: "Georgian" }}>
              გამოცემა ნº 1
            </Text>
            <Text style={{ fontSize: 12, fontFamily: "Georgian" }}>
              {georgianDate}
            </Text>
          </View>
          <View style={styles.hr}></View>
          <Text
            style={{
              textAlign: "center",
              fontSize: 36,
              fontFamily: "Georgian",
            }}
          >
            ჩვენი კომპანიის გაზეთი
          </Text>
          <View style={styles.hr}></View>
        </View>
        {correctsWithImage.length !== 0 && (
          <View style={styles.wholeView}>
            <View style={styles.wholeChildView}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  fontFamily: "Georgian",
                }}
              >
                {correctsWithImage[0].question}
              </Text>
              <Text style={{ fontSize: 10, fontFamily: "Georgian" }}>
                {correctsWithImage[0].seeMore}
              </Text>
            </View>
            <View style={{ width: "100%", position: "relative" }}>
              <Image
                src={correctsWithImage[0].image}
                style={{
                  width: "100%",
                  // height: 400,
                  // objectFit: "cover",
                  aspectRatio: 4 / 3,
                }}
              />
              <View style={styles.darkBackground}></View>
            </View>
            <View style={styles.hr}></View>
          </View>
        )}
        {correctsWithoutImage.length == 1 && (
          <View style={styles.wholeView} wrap={false}>
            <View style={styles.wholeChildView}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  fontFamily: "Georgian",
                }}
              >
                {correctsWithoutImage[0].question}
              </Text>
              <Text style={{ fontSize: 10, fontFamily: "Georgian" }}>
                {correctsWithoutImage[0].seeMore}
              </Text>
            </View>
            <View style={styles.hr}></View>
          </View>
        )}
        {correctsWithoutImage.length >= 2 && (
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "space-between",
              paddingVertical: 16,
              // paddingHorizontal: 24,
            }}
            wrap={false}
          >
            <View
              style={[
                styles.halfView,
                { borderRightWidth: 1, borderRightColor: "black" },
              ]}
            >
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  fontFamily: "Georgian",
                }}
              >
                {correctsWithoutImage[0].question.replace(/-/g, "")}
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  fontFamily: "Georgian",
                }}
              >
                {correctsWithoutImage[0].seeMore.replace(/-/g, "")}
              </Text>
            </View>
            <View style={styles.halfView}>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  fontFamily: "Georgian",
                }}
              >
                {correctsWithoutImage[1].question.replace(/-/g, "")}
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  fontFamily: "Georgian",
                }}
              >
                {correctsWithoutImage[1].seeMore.replace(/-/g, "")}
              </Text>
            </View>
          </View>
        )}
        {correctsWithImage.length !== 0 && correctsWithoutImage.length >= 1 && (
          <View style={styles.backgroundContainer}>
            <Image src={"/images/paper.png"} style={styles.background} />
          </View>
        )}
        {correctsWithImage.length >= 2 && (
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "space-between",
              paddingVertical: 16,
              // paddingHorizontal: 24,
            }}
            wrap={false}
          >
            <View style={{ position: "relative", width: "48%" }}>
              <Image
                src={correctsWithImage[1].image}
                style={{ width: "100%", height: 200, objectFit: "cover" }}
              />
              <View style={styles.darkBackground}></View>
            </View>
            <View style={styles.halfView}>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  fontFamily: "Georgian",
                }}
              >
                {correctsWithImage[1].question}
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  fontFamily: "Georgian",
                }}
              >
                {correctsWithImage[1].seeMore}
              </Text>
            </View>
          </View>
        )}

        {correctsWithoutImage.length >= 3 && (
          <View style={styles.wholeView} wrap={false}>
            <View style={styles.wholeChildView}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  fontFamily: "Georgian",
                }}
              >
                {correctsWithoutImage[2].question}
              </Text>
              <Text style={{ fontSize: 10, fontFamily: "Georgian" }}>
                {correctsWithoutImage[2].seeMore}
              </Text>
            </View>
            <View style={styles.hr}></View>
          </View>
        )}
        {/* <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            paddingVertical: 16,
            // paddingHorizontal: 24,
          }}
          wrap={false}
        >
          {correctsWithoutImage.length >= 4 && (
            <View
              style={[
                styles.halfView,
                { borderRightWidth: 1, borderRightColor: "black" },
              ]}
            >
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  fontFamily: "Georgian",
                }}
              >
                {correctsWithoutImage[3].question}
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  fontFamily: "Georgian",
                }}
              >
                {correctsWithoutImage[3].seeMore}
              </Text>
            </View>
          )}
          {correctsWithoutImage.length >= 5 && (
            <View style={styles.halfView}>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  fontFamily: "Georgian",
                }}
              >
                {correctsWithoutImage[4].question}
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  fontFamily: "Georgian",
                }}
              >
                {correctsWithoutImage[4].seeMore}
              </Text>
            </View>
          )}
        </View> */}
        {/* <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            paddingVertical: 16,
            // paddingHorizontal: 24,
          }}
          wrap={false}
        >
          {correctsWithoutImage.length >= 6 && (
            <View
              style={[
                styles.halfView,
                { borderRightWidth: 1, borderRightColor: "black" },
              ]}
            >
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  fontFamily: "Georgian",
                }}
              >
                {correctsWithoutImage[5].question}
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  fontFamily: "Georgian",
                }}
              >
                {correctsWithoutImage[5].seeMore}
              </Text>
            </View>
          )}
          {correctsWithoutImage.length >= 7 && (
            <View style={styles.halfView}>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  fontFamily: "Georgian",
                }}
              >
                {correctsWithoutImage[6].question}
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  fontFamily: "Georgian",
                }}
              >
                {correctsWithoutImage[6].seeMore}
              </Text>
            </View>
          )}
        </View> */}
        {correctsWithImage.length >= 3 && (
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "space-between",
              paddingVertical: 16,
              // paddingHorizontal: 24,
            }}
            wrap={false}
          >
            <View style={styles.halfView}>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  fontFamily: "Georgian",
                }}
              >
                {correctsWithImage[2].question}
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  fontFamily: "Georgian",
                }}
              >
                {correctsWithImage[2].seeMore}
              </Text>
            </View>
            <View style={{ position: "relative", width: "48%" }}>
              <Image
                src={correctsWithImage[2].image}
                style={{ width: "100%", height: 200, objectFit: "cover" }}
              />
              <View style={styles.darkBackground}></View>
            </View>
          </View>
        )}
        {correctsWithImage.length >= 4 && (
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "space-between",
              paddingVertical: 16,
              // paddingHorizontal: 24,
            }}
            wrap={false}
          >
            <View style={{ position: "relative", width: "48%" }}>
              <Image
                src={correctsWithImage[3].image}
                style={{ width: "100%", height: 200, objectFit: "cover" }}
              />
              <View style={styles.darkBackground}></View>
            </View>
            <View style={styles.halfView}>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  fontFamily: "Georgian",
                }}
              >
                {correctsWithImage[3].question}
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  fontFamily: "Georgian",
                }}
              >
                {correctsWithImage[3].seeMore}
              </Text>
            </View>
          </View>
        )}
        {correctsWithImage.length >= 3 && (
          <View style={styles.backgroundContainer}>
            <Image src={"/images/paper.png"} style={styles.background} />
          </View>
        )}
      </Page>
    </Document>
  );
};

// Create styles
const styles = StyleSheet.create({
  page: {
    width: "100%",
    height: "100%",
    backgroundColor: "#c1c1c1",
    padding: 24,
    position: "relative",
  },
  backgroundContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    minWidth: "100%",
    minHeight: "100%",
    zIndex: -1,
  },
  background: {
    width: "100%",
    height: "100%",
  },
  mainContainer: {
    position: "relative",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  titleView: {
    width: "100%",
    paddingBottom: 20,
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },
  titleChildView: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  hr: {
    width: "100%",
    height: 1,
    backgroundColor: "black",
  },
  wholeView: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 30,
  },
  wholeChildView: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  darkBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.6)",
    zIndex: 10,
  },
  halfView: {
    width: "48%",
    display: "flex",
    gap: 8,
    paddingVertical: 12,
  },
});

{
  /* <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            paddingVertical: 16,
            // paddingHorizontal: 24,
          }}
          wrap={false}
        >
          {correctsWithoutImage.length >= 8 && (
            <View
              style={[
                styles.halfView,
                { borderRightWidth: 1, borderRightColor: "black" },
              ]}
            >
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  fontFamily: "Georgian",
                }}
              >
                {correctsWithoutImage[7].question}
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  fontFamily: "Georgian",
                }}
              >
                {correctsWithoutImage[7].seeMore}
              </Text>
            </View>
          )}
          {correctsWithoutImage.length >= 9 && (
            <View style={styles.halfView}>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  fontFamily: "Georgian",
                }}
              >
                {correctsWithoutImage[8].question}
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  fontFamily: "Georgian",
                }}
              >
                {correctsWithoutImage[8].seeMore}
              </Text>
            </View>
          )}
        </View> */
}
{
  /* {correctsWithImage.length >= 5 && (
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "space-between",
              paddingVertical: 16,
              // paddingHorizontal: 24,
            }}
            wrap={false}
          >
            <View style={styles.halfView}>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  fontFamily: "Georgian",
                }}
              >
                {correctsWithImage[4].question}
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  fontFamily: "Georgian",
                }}
              >
                {correctsWithImage[4].seeMore}
              </Text>
            </View>
            <View style={{ position: "relative", width: "48%" }}>
              <Image
                src={correctsWithImage[4].image}
                style={{ width: "100%", height: 200, objectFit: "cover" }}
              />
              <View style={styles.darkBackground}></View>
            </View>
          </View>
        )} */
}
{
  /* {correctsWithoutImage.length >= 10 && (
          <View style={styles.wholeView} wrap={false}>
            <View style={styles.wholeChildView}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  fontFamily: "Georgian",
                }}
              >
                {correctsWithoutImage[9].question}
              </Text>
              <Text style={{ fontSize: 10, fontFamily: "Georgian" }}>
                {correctsWithoutImage[9].seeMore}
              </Text>
            </View>
            <View style={styles.hr}></View>
          </View>
        )} */
}
{
  /* {correctsWithImage.length >= 6 && (
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "space-between",
              paddingVertical: 16,
              // paddingHorizontal: 24,
            }}
            wrap={false}
          >
            <View style={styles.halfView}>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  fontFamily: "Georgian",
                }}
              >
                {correctsWithImage[5].question}
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  fontFamily: "Georgian",
                }}
              >
                {correctsWithImage[5].seeMore}
              </Text>
            </View>
            <View style={{ position: "relative", width: "48%" }}>
              <Image
                src={correctsWithImage[5].image}
                style={{ width: "100%", height: 200, objectFit: "cover" }}
              />
              <View style={styles.darkBackground}></View>
            </View>
          </View>
        )} */
}
{
  /* {correctsWithImage.length >= 7 && (
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "space-between",
              paddingVertical: 16,
              // paddingHorizontal: 24,
            }}
            wrap={false}
          >
            <View style={{ position: "relative", width: "48%" }}>
              <Image
                src={correctsWithImage[6].image}
                style={{ width: "100%", height: 200, objectFit: "cover" }}
              />
              <View style={styles.darkBackground}></View>
            </View>
            <View style={styles.halfView}>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  fontFamily: "Georgian",
                }}
              >
                {correctsWithImage[6].question}
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  fontFamily: "Georgian",
                }}
              >
                {correctsWithImage[6].seeMore}
              </Text>
            </View>
          </View>
        )} */
}
{
  /* {correctsWithImage.length >= 8 && (
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "space-between",
              paddingVertical: 16,
              // paddingHorizontal: 24,
            }}
            wrap={false}
          >
            <View style={styles.halfView}>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  fontFamily: "Georgian",
                }}
              >
                {correctsWithImage[7].question}
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  fontFamily: "Georgian",
                }}
              >
                {correctsWithImage[7].seeMore}
              </Text>
            </View>
            <View style={{ position: "relative", width: "48%" }}>
              <Image
                src={correctsWithImage[7].image}
                style={{ width: "100%", height: 200, objectFit: "cover" }}
              />
              <View style={styles.darkBackground}></View>
            </View>
          </View>
        )} */
}
{
  /* </View> */
}
{
  /* </View> */
}
