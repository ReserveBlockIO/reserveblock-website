import styled from "styled-components";
import { Download } from "../components/Home/Download";
import { SectionHeaderComponent } from "../components/common/SectionHeaderComponent";
import { Section } from "../styles/styled";
import { ThemeFonts } from "../theme";


const Heading = styled.h2`
position: relative;
font-size: 42px;
line-height: 42px;
letter-spacing: 4px;
text-transform: uppercase;
font-weight: bold;
color: #84e9fd;
font-family: ${ThemeFonts.heading};
font-weight: bold;
text-align:center;

`;

export const PaymentCompleteScreen = () => {
    return (
        <Section>
            <div className="container">

                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "55vh" }}>

                    <div>

                        <Heading>Payment Complete</Heading>

                        <p className="text-center mt-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, corrupti asperiores! Iure iste repellat inventore quaerat possimus corporis nulla. Officia voluptate recusandae illo magni iusto atque amet vero earum repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, corrupti asperiores! Iure iste repellat inventore quaerat possimus corporis nulla. Officia voluptate recusandae illo magni iusto atque amet vero earum repudiandae.
                        </p>

                        <div className="row">
                            <div className="col-12 col-md-4">
                                <Download
                                    title=""
                                    buttonText="Open Web Wallet"
                                    noIcon
                                    url={`https://wallet.rbx.network/#dashboard`}
                                />
                            </div>
                            <div className="col-12 col-md-4">
                                <Download
                                    title=""
                                    buttonText="Launch GUI"
                                    noIcon
                                    url={`rbx://launch`}
                                />
                            </div>
                            <div className="col-12 col-md-4">
                                <Download
                                    title=""
                                    buttonText="Back to Website"
                                    noIcon
                                    url={`/#wallet`}
                                />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </Section>
    );
};
