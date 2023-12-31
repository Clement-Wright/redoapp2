/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField, useTheme } from "@aws-amplify/ui-react";
import { Equation } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function EquationRealEditNote(props) {
  const {
    idProp,
    equation: equationModelProp,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const { tokens } = useTheme();
  const initialValues = {
    equation: "",
    intercepts: "",
    domain: "",
    range: "",
    image: "",
  };
  const [equation, setEquation] = React.useState(initialValues.equation);
  const [intercepts, setIntercepts] = React.useState(initialValues.intercepts);
  const [domain, setDomain] = React.useState(initialValues.domain);
  const [range, setRange] = React.useState(initialValues.range);
  const [image, setImage] = React.useState(initialValues.image);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = equationRecord
      ? { ...initialValues, ...equationRecord }
      : initialValues;
    setEquation(cleanValues.equation);
    setIntercepts(cleanValues.intercepts);
    setDomain(cleanValues.domain);
    setRange(cleanValues.range);
    setImage(cleanValues.image);
    setErrors({});
  };
  const [equationRecord, setEquationRecord] = React.useState(equationModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Equation, idProp)
        : equationModelProp;
      setEquationRecord(record);
    };
    queryData();
  }, [idProp, equationModelProp]);
  React.useEffect(resetStateValues, [equationRecord]);
  const validations = {
    equation: [],
    intercepts: [],
    domain: [],
    range: [],
    image: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap={tokens.space.xs.value}
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          equation,
          intercepts,
          domain,
          range,
          image,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            Equation.copyOf(equationRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "EquationUpdateForm")}
      {...rest}
    >
      <TextField
        label="Equation"
        isRequired={false}
        isReadOnly={false}
        value={equation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              equation: value,
              intercepts,
              domain,
              range,
              image,
            };
            const result = onChange(modelFields);
            value = result?.equation ?? value;
          }
          if (errors.equation?.hasError) {
            runValidationTasks("equation", value);
          }
          setEquation(value);
        }}
        onBlur={() => runValidationTasks("equation", equation)}
        errorMessage={errors.equation?.errorMessage}
        hasError={errors.equation?.hasError}
        {...getOverrideProps(overrides, "equation")}
      ></TextField>
      <TextField
        label="Intercepts"
        isRequired={false}
        isReadOnly={false}
        value={intercepts}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              equation,
              intercepts: value,
              domain,
              range,
              image,
            };
            const result = onChange(modelFields);
            value = result?.intercepts ?? value;
          }
          if (errors.intercepts?.hasError) {
            runValidationTasks("intercepts", value);
          }
          setIntercepts(value);
        }}
        onBlur={() => runValidationTasks("intercepts", intercepts)}
        errorMessage={errors.intercepts?.errorMessage}
        hasError={errors.intercepts?.hasError}
        {...getOverrideProps(overrides, "intercepts")}
      ></TextField>
      <TextField
        label="Domain"
        isRequired={false}
        isReadOnly={false}
        value={domain}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              equation,
              intercepts,
              domain: value,
              range,
              image,
            };
            const result = onChange(modelFields);
            value = result?.domain ?? value;
          }
          if (errors.domain?.hasError) {
            runValidationTasks("domain", value);
          }
          setDomain(value);
        }}
        onBlur={() => runValidationTasks("domain", domain)}
        errorMessage={errors.domain?.errorMessage}
        hasError={errors.domain?.hasError}
        {...getOverrideProps(overrides, "domain")}
      ></TextField>
      <TextField
        label="Range"
        isRequired={false}
        isReadOnly={false}
        value={range}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              equation,
              intercepts,
              domain,
              range: value,
              image,
            };
            const result = onChange(modelFields);
            value = result?.range ?? value;
          }
          if (errors.range?.hasError) {
            runValidationTasks("range", value);
          }
          setRange(value);
        }}
        onBlur={() => runValidationTasks("range", range)}
        errorMessage={errors.range?.errorMessage}
        hasError={errors.range?.hasError}
        {...getOverrideProps(overrides, "range")}
      ></TextField>
      <TextField
        label="Image"
        isRequired={false}
        isReadOnly={false}
        value={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              equation,
              intercepts,
              domain,
              range,
              image: value,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks("image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("image", image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, "image")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || equationModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Save"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || equationModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
