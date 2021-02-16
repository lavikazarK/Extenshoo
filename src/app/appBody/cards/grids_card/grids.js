/*global chrome*/
import React from "react";
import MaterialCard from "../../../../common/components/card/material_card";
import {makeStyles} from "@material-ui/core/styles";
import DescriptionItem from "../../../../common/components/description_item/description_item";
import IconButtonCmp from "../../../../common/components/icon_button/icon_button";
import {Person, ShoppingBasket, GroupWork, TextFormat, ShoppingCartOutlined, ChromeReaderMode, PolicyOutlined, PlayCircleFilled, Note} from "@material-ui/icons";
import Card from "@material-ui/core/Card/Card";

const useStyles = makeStyles(() => ({

    grids: {
        display: "grid",
        gridTemplateColumns: "auto auto auto",
    },

    innerGrid: {
        display: "flex",
        width: 70,
        alignItems: "center",
        justifyContent: "center",
        height: 105,

    }
}));

const GridsCard = ({onBackClick}) => {
    const classes = useStyles();

    const redirect = (url) => {
        chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
            chrome.tabs.sendMessage(tabs[0].id, {
                type: "REDIRECT_TO_GRID",
                data: { url: url }
            });
        });
    };

    return (
        <MaterialCard title={"Grids"} onBackClick={onBackClick}>

            <div className={classes.grids}>
                <div className={classes.innerGrid}>

                    <IconButtonCmp
                        title={"Profiles"}
                        icon={Person}
                        onClick={() => redirect("performance.jsp#prfsc=a:prfl&prfile=a:true")}
                    />
                </div>
                <div className={classes.innerGrid}>

                    <IconButtonCmp
                        title={"Portfolios"}
                        icon={Note}
                        onClick={() => redirect("performance.jsp#prfsc=a:portfolios&portfoliosflv=a:true")}
                    />
                </div>
                <div className={classes.innerGrid}>

                    <IconButtonCmp
                        title={"Campaigns"}
                        icon={ShoppingBasket}
                        onClick={() => redirect("performance.jsp#prfsc=a:camp&cmpflv=a:true")}
                    />
                </div>
                <div className={classes.innerGrid}>

                    <IconButtonCmp
                        title={"Ad Groups"}
                        icon={GroupWork}
                        onClick={() => redirect("performance.jsp#prfsc=a:adg&adgflv=a:true")}
                    />
                </div>
                <div className={classes.innerGrid}>

                    <IconButtonCmp
                        title={"Keywords"}
                        icon={TextFormat}
                        onClick={() => redirect("performance.jsp#prfsc=a:kpf&kpflv=a:true")}
                    />
                </div>

                <div className={classes.innerGrid}>

                    <IconButtonCmp
                        title={"Ads"}
                        icon={ChromeReaderMode}
                        onClick={() => redirect("performance.jsp#prfsc=a:ads&adsflv=a:true")}
                    />
                </div>
                <div className={classes.innerGrid}>

                    <IconButtonCmp
                        title={"Products"}
                        icon={ShoppingCartOutlined}
                        onClick={() => redirect("performance.jsp#prfsc=a:productasset&productassetflv=a:true")}
                    />
                </div>
                <div className={classes.innerGrid}>

                    <IconButtonCmp
                        title={"Audits"}
                        icon={PolicyOutlined}
                        onClick={() => redirect("grid.jsp#/audit_groups")}
                    />
                </div>
                <div className={classes.innerGrid}>

                    <IconButtonCmp
                        title={"AA"}
                        icon={PlayCircleFilled}
                        onClick={() => redirect("grid.jsp#/automated_actions")}
                    />
                </div>
                </div>
        </MaterialCard>
);
};

export default GridsCard;
