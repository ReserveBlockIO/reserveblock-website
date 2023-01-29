import { useState, useEffect } from "react";
import { Block } from "../models";
import { listBlocks } from "../service";
import * as timeago from 'timeago.js';

import styled from 'styled-components';
import { isMobile } from "../utils";
import { SectionContent } from "../styles/styled";
import { ThemeColors } from "../theme";


interface IContainer {
    fullWidth: boolean;
}

const Container = styled.div<IContainer>`
    width: ${(props) => props.fullWidth ? `100%;` : `900px;`};
    /* min-height: 340px; */

    

    display:flex;
    align-items:center;
    justify-content:center;

    
    a {
        color: #84e9fd;
        text-decoration: none;
        transition: color .4s; 
        &:hover{
            color: #fff;
        }
    }
    
    font-size: 16px;
    
    span {
        color: rgba(255,255,255,.2);
        font-weight: bold;
    }
    
    ${isMobile() ? `width: 300px; font-size: 12px;` : ``};
`;


const MiniContainer = styled.div`
  min-height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    color: ${ThemeColors.bright};
    text-align: center;
  }
  h3 {
    padding-top: 4px;
    font-size: 16px;
    margin-bottom: 0;
    text-align: center;

   
  }
  h4 {
    padding-top: 4px;
    font-size: 12px;
    margin-bottom: 0;
    text-align: center;

   
  }

  a {
    color: ${ThemeColors.light};
    text-decoration: underline;
    
    &:hover {
    color: ${ThemeColors.bright};

    }
  }
`;


interface Props {
    fullWidth: boolean;
    mini?: boolean;
}

export const SpyGlass = (props: Props) => {
    const [block, setBlock] = useState<Block | undefined>(undefined);

    useEffect(() => {
        const poll = () => {
            const params = { limit: 1 };
            listBlocks(1, params).then((data) => {
                if (data.results.length > 0) {
                    setBlock(data.results[0]);
                }
            })
        }

        poll();

        const interval = setInterval(() => {
            poll();
        }, 15000);

        return () => clearInterval(interval);

    }, [])

    if (props.mini) {
        return (
            <SectionContent className="my-2" outline>
                <MiniContainer>
                    {block ? (
                        <div>
                            <h2>Network Spyglass</h2>
                            <h3>Block <a href={`https://rbx.network/block/${block.height}`} target="_blank" rel="noreferrer">{block.height}</a> | Craft Time: {block.craftTime}s </h3>
                            <h4>Validated By:</h4>
                            <h4><a href={`https://rbx.network/validators/${block.validator}`} target="_blank" rel="noreferrer">{block.validator}</a></h4>
                            {/* <h2>{item.label}</h2>
                <h3 className={item.value.length < 10 ? "large" : ""}>
                  {item.value}
                </h3> */}
                        </div>) : (
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    )}
                </MiniContainer>
            </SectionContent>
        )
    }

    return <div className=" my-4 py-2 px-3 rounded" style={{ backgroundColor: 'rgba(0,0,0,.5)', boxShadow: "0 0 3px 2px rgba(255,255,255,.15)" }}>
        <div className="h5" style={{ fontWeight: 500, paddingTop: 8, letterSpacing: 2, marginBottom: 0, }}>Network Spyglass</div>
        <div className="text-muted"><small>{block ? block.timestampLabel : ' '}</small></div>
        <hr style={{ height: 1, color: 'rgba(255,255,255,.4)', marginTop: 2, marginBottom: 2, }} />

        <Container fullWidth={props.fullWidth}>

            {block ? (

                <div style={{ width: '100%' }}>

                    <div className="row text-start">
                        <div className="col-12 col-md-2 py-1">
                            Block: <a href={`https://rbx.network/block/${block.height}`} target="_blank" rel="noreferrer">{block.height}</a>
                        </div>
                        <div className="d-none d-md-block col-12 col-md-10 py-1">
                            Hash: <a href={`https://rbx.network/block/${block.height}`} target="_blank" rel="noreferrer">{block.hash}</a>
                        </div>

                        <div className="col-12 col-md-5 py-1">
                            Craft Time: {block.craftTime / 1000} seconds <span>|</span> Size: {block.sizeLabel}
                        </div>

                        <div className="d-none d-md-block col-12  col-md-7 py-1">
                            # of Txs: {block.transactions.length} <span>|</span>  Total Amount: {block.totalAmount} RBX <span>|</span> Total Reward: {block.totalReward} RBX
                        </div>

                        <div className="d-block d-md-none col-12  col-md-7 py-1">
                            # of Txs: {block.transactions.length} <span>|</span>  Total Amount: {block.totalAmount} RBX
                        </div>

                        <div className="col-12 col-md-6 py-1">
                            Validated By: <a href={`https://rbx.network/validators/${block.validator}`} target="_blank" rel="noreferrer">{block.validator}</a>
                        </div>

                        <div className="col-12 col-md-6 py-1">
                            Version: {block.version}
                        </div>


                    </div>
                </div>

            ) : (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )}
        </Container>
    </div>
}

interface LineItemProps {
    title: string;
    value: string;
    fullWidth?: boolean;
    href?: string;
}

const LineItem = (props: LineItemProps) => {

    const { title, value, fullWidth, href } = props;

    return (
        <div className="pt-2" style={{ width: fullWidth ? '100%' : '50%' }}><div className="text-light"><small><u>{title}</u></small></div>

            {href ? (<>
                <a style={{ fontSize: '12px', lineHeight: "10px", wordBreak: 'break-all', textDecoration: "none", color: "#84e9fd" }} href={href} target="_blank" rel="noreferrer">{value}</a>
            </>) : (
                <span style={{ fontSize: '12px', lineHeight: "10px", wordBreak: 'break-all', color: "#84e9fd" }}>{value}</span>
            )}

        </div>);
}

interface DateCraftedProps {
    date: Date;
}

const DateCrafted = (props: DateCraftedProps) => {

    const { date } = props;

    const [label, setLabel] = useState<String>(timeago.format(date))

    useEffect(() => {

        const update = () => {
            setLabel(timeago.format(date));
        }

        update();
        const interval = setInterval(() => {
            update();
        }, 1000);

        return () => clearInterval(interval);
    }, [])

    return <small className="text-light">{label}</small>
}

export default SpyGlass;