import { useState, useEffect } from "react";
import { Block } from "../models";
import { listBlocks } from "../service";
import * as timeago from 'timeago.js';

import styled from 'styled-components';
import { isMobile } from "../utils";


const Container = styled.div`
    min-width: 590px;
    min-height: 340px;

    display:flex;
    align-items:center;
    justify-content:center;

    ${isMobile() ? `transform: scale(0.75); width: 100%; min-height: 280px;` : ``};
    
`;



export const SpyGlass = () => {
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
        }, 5000);

        return () => clearInterval(interval);

    }, [])

    return <div className=" my-4 py-2 px-3 rounded" style={{ backgroundColor: 'rgba(0,0,0,.5)', boxShadow: "0 0 3px 2px rgba(255,255,255,.15)" }}>
        <div className="h5" style={{ fontWeight: 500, paddingTop: 8, letterSpacing: 2, }}>Spyglass</div>
        <Container>

            {block ? (

                <div>

                    <div className="d-flex justify-content-between">
                        <div>Block {block.height}</div>
                        <div>{block.timestampLabel}</div>
                    </div>

                    <div className="pt-2">
                        <LineItem title="Hash" value={block.hash} fullWidth href={"https://rbx.network/block/" + block.height}></LineItem>
                    </div>

                    <div className="d-flex justify-content-between">
                        <LineItem title="Craft Time" value={`${block.craftTime / 1000} seconds`}></LineItem>
                        <LineItem title="Size" value={block.sizeLabel}></LineItem>
                    </div>
                    <div className="d-flex justify-content-between">
                        <LineItem title="# of Txs" value={block.transactions.length.toString()}></LineItem>

                        <div className="pt-2" style={{ width: '50%' }}>
                            <div className="text-light"><small><u>Txs</u></small></div>
                            {block.transactions.map((t, i) => <a key={t.hash} style={{ fontSize: '12px', lineHeight: "10px", textDecoration: "none", color: "#84e9fd" }} href={"https://rbx.network/transaction/" + t.hash} target="_blank" rel="noreferrer">{" "}View Tx {i + 1}{" "}</a>)}
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <LineItem title="Total Amount" value={`${block.totalAmount} RBX`}></LineItem>
                        <LineItem title="Total Reward" value={`${block.totalReward} RBX`}></LineItem>

                    </div>

                    <div className="d-flex justify-content-between">
                        <LineItem title="Validated By" value={block.validator} fullWidth href={'https://rbx.network/validators/' + block.validator}></LineItem>
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