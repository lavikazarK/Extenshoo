/*global chrome*/
import React, { useMemo } from "react";
import { TYPE_TO_CMP } from "./type_to_component_map";

const useParameterChange = ({
  parameters,
  selectedParam,
  paramNewValues,
  setParamNewValues
}) => {
  return useMemo(() => {
    const selectedParameterObj = parameters.find(
      param => param.prototype.name === selectedParam
    );
    const ParamValuesCmp = TYPE_TO_CMP[(selectedParameterObj?.prototype?.type)];
    return selectedParameterObj && selectedParameterObj.prototype
      ? () => (
          <ParamValuesCmp
            paramName={selectedParameterObj.prototype.name}
            defaultValue={selectedParameterObj.prototype.defaultValue}
            availableValues={selectedParameterObj.prototype.availableValues}
            value={selectedParameterObj.value}
            type={selectedParameterObj.prototype.type}
            paramNewValues={paramNewValues}
            setParamNewValues={setParamNewValues}
          />
        )
      : undefined;
  }, [selectedParam]);
};

export default useParameterChange;
