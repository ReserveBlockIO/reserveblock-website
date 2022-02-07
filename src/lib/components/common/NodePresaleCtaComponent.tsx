import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SectionContent, SectionHeading4 } from "../../styles/styled";
import { ThemeColors } from "../../theme";

export const NodePresaleCtaComponent = () => {
  return (
    <SectionContent extraGlow outline style={{ borderRadius: 6 }}>
      <div className="px-3">
        <div className="">
          <SectionHeading4>
            <strong style={{ fontSize: 38, letterSpacing: 3 }}>
              Node Presale
            </strong>
          </SectionHeading4>
          <SectionHeading4>
            <strong style={{ fontSize: 34, letterSpacing: 3, opacity: 0.8 }}>
              Feb 22 6pm EST
            </strong>
          </SectionHeading4>
          <div className="py-1" />
          <SectionHeading4
            className="text-center pb-1 mb-0 text-lowercase"
            style={{
              color: ThemeColors.bright,
              letterSpacing: 5,
              fontSize: 29,
            }}
          >
            12d 3h 5m 12s
          </SectionHeading4>
          <div className="pt-1" />
        </div>

        <div className="mt-3">
          <div className="d-flex justify-content-center align-items-center">
            <button className="btn btn-light btn-lg w-100 text-uppercase">
              Activate
              <span className="px-2"></span>
              <FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
    </SectionContent>
  );
};
