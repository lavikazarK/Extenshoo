/*global chrome*/
import React from "react";
import RadioCmp from "../components/radio_cmp";
import ListCmp from "../components/list_cmp";
import InputCmp from "../components/input_cmp";
import DateCmp from "../components/date_cmp";

export const TYPE_TO_CMP = {
  Boolean: props => <RadioCmp {...props} availableValues={"true,false"} />,
  Enum: RadioCmp,
  List: ListCmp,
  String: InputCmp,
  Int: InputCmp,
  Float: InputCmp,
  Monitary: InputCmp,
  Date: DateCmp
};
