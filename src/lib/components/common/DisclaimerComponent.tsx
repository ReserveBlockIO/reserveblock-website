import styled from "styled-components";
import { SectionContent } from "../../styles/styled";

const Container = styled.div`
  font-size: 20px;
  line-height: 28px;
`;

export const DisclaimerComponent = () => {
  return (
    <Container className="py-5">
      <SectionContent>
        <p>
          This website is being published by the ReserveBlock Foundation and/or
          the ReserveBlock Labs LLC (the &ldquo;
          <strong>
            <em>Foundation</em>
          </strong>
          &rdquo;), for informational purposes and as a means of securing
          feedback and comments from the community at large. Your use of this
          website and its content is done so volitionally and without coercion
          or reliance on future expectations or promises.&nbsp;&nbsp;
        </p>
        <p>
          Nothing in this website should be construed as a definitive guarantee
          or promise of how the{" "}
          <strong>
            <em>Foundation&rsquo;s</em>
          </strong>
          business will develop over time or of the utility or value of its
          network. This website provides a general overview of the{" "}
          <strong>
            <em>Foundation&rsquo;s</em>
          </strong>{" "}
          anticipated plans and network, which is subject to change at its sole
          discretion or upon the decentralized agreement of the{" "}
          <strong>
            <em>Foundation</em>
          </strong>{" "}
          as a whole.&nbsp; Success of the network is contingent upon many
          factors exceeding the control of the
          <strong>
            <em>Foundation</em>
          </strong>
          and is unknown and not capable of quantifiable prediction or
          attestation.&nbsp; Any statements contained in this website concerning
          future events are based solely on the
          <strong>
            <em>Foundation&rsquo;s </em>
          </strong>
          reasonable and subjective expectations and should not be a basis for
          reliance, whether reasonable or unreasonable.&nbsp; Any analysis or
          prospective expectations contained in this website are based solely
          upon opinions made by the
          <strong>
            <em>Foundation </em>
          </strong>
          and/or its community, and should not be relied upon in whole, or in
          part, without proper independent analysis and verification.&nbsp;
        </p>
        <p>
          The{" "}
          <strong>
            <em>Foundation</em>
          </strong>{" "}
          does not provide investment, legal or tax advice and nothing contained
          within its website should be construed as being financial, legal,
          investment, tax or any other advice.&nbsp; Use of this website is
          conditioned upon the laws of your jurisdiction and should not be
          accessed where prohibited. No information or materials published on
          the website shall constitute a solicitation, an offer, or a
          recommendation to buy or sell any investment instruments, to effect
          any transactions, or to conclude any legal act of any kind whatsoever.
        </p>
        <p>
          To the fullest extent permitted by law, in no event shall the{" "}
          <strong>
            <em>Foundation</em>
          </strong>{" "}
          have any liability whatsoever to any person or entity for any direct
          or indirect loss, liability, cost, claim, expense or damage of any
          kind, whether in contract or in tort, including negligence, or
          otherwise, arising out of or related to the reliance or use of all or
          part of the website and its content, or any links to third party
          websites contained herein.
        </p>
      </SectionContent>
    </Container>
  );
};
