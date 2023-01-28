import styled from "styled-components";
import { SectionContent, SectionHeading1 } from "../../styles/styled";

const Container = styled.div`
  font-size: 20px;
  line-height: 28px;

  span {
    font-weight: 400;
  }
  b {
    color: #84e9fd;
    font-weight: bold;
  }
  i {
    font-weight: bold;
  }
`;


export const DisclaimerComponent = () => {
  return (
    <Container className="py-5">
      <SectionHeading1>Disclaimer</SectionHeading1>

      <SectionContent>
        <p><span>This website is being published by the ReserveBlock RBX Network (the &ldquo;</span><b><i>Network</i></b><span>&rdquo;), for informational purposes and as a means of securing feedback and comments from the community at large. Your use of this website and its content is done so volitionally and without coercion or reliance on future expectations or promises.&nbsp;&nbsp;</span></p>
        <p><span>Nothing in this website should be construed as a definitive guarantee or promise of how the&nbsp;</span><b><i>Network </i></b><span>will develop over time or of the utility or value of this network. This website provides a general overview of the </span><b><i>Network&rsquo;s</i></b><span> plans and functions, which is subject to change by Validators or upon the decentralized agreement of the&nbsp;</span><b><i>Network</i></b><span>&nbsp;as a whole.&nbsp; Success of the network is contingent upon many factors exceeding the control of&nbsp;founding validators or developers and is unknown and not capable of quantifiable prediction or attestation.&nbsp; Any statements contained in this website concerning future events are based solely on the</span><b><i>&nbsp;Validators or Developers </i></b><span>reasonable and subjective expectations and should not be a basis for reliance, whether reasonable or unreasonable.&nbsp; Any analysis or prospective expectations contained in this website are based solely upon opinions made by the&nbsp;</span><b><i>Validators and Developers&nbsp;</i></b><span>and/or its community, and should not be relied upon in whole, or in part, without proper independent analysis and verification.&nbsp;</span></p>
        <p><span>The&nbsp;</span><b><i>Network</i></b><span>&nbsp;does not provide investment, legal or tax advice and nothing contained within its website should be construed as being financial, legal, investment, tax or any other advice.&nbsp; Use of this website is conditioned upon the laws of your jurisdiction and should not be accessed where prohibited. No information or materials published on the website shall constitute a solicitation, an offer, or a recommendation to buy or sell any investment instruments, to affect any transactions, or to conclude any legal act of any kind whatsoever.</span></p>
        <p><span>To the fullest extent permitted by law, in no event shall the&nbsp;</span><b><i>Validators, Developers, or Network</i></b><span>&nbsp;have any liability whatsoever to any person or entity for any direct or indirect loss, liability, cost, claim, expense or damage of any kind, whether in contract or in tort, including negligence, or otherwise, arising out of or related to the reliance or use of all or part of the website and its content, or any links to wallets and websites contained herein.</span></p>
        <p><b>READERS FURTHER ACKNOWLEDGE THAT:</b> <span>(1) ReserveBlock RBX Network, its validators and / or developers (the &ldquo;</span><b><i>Network</i></b><span>&rdquo;), is not now by this website and the information shown herein offering any securities, nor soliciting an offer to buy any securities; (2) this website and the information herein shall not be construed as any description of the business of the Network in conjunction with any offering of securities; (3) the information contained on this website is subject to change without notice by the majority of the validators, and no one shall assume from the availability of this website and the information herein that the affairs of the Network have not changed since the date of this information.</span></p>
        <p></p>
        <p><span>&nbsp;</span></p>
        <p></p>
      </SectionContent>
    </Container>
  );
};
