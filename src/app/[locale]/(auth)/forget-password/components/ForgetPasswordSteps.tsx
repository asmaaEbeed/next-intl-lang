"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { FaCheck } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { TForgetPasswordSteps } from "../types";

const stepsStyle: Record<"done" | "current" | "pending", string> = {
  done: "bg-main-green text-white",
  current: "bg-main-blue text-white",
  pending: "border-2 border-gray-200 text-gray-300",
};

type Props = {
  steps: TForgetPasswordSteps[];
  currentStep: number;
};

const ForgetPasswordSteps = ({ steps, currentStep }: Props) => {
  const {
    t,
    i18n: { language },
  } = useTranslation("auth");

  const getStepStatus = (stepId: number) => {
    if (stepId === currentStep) return "current";
    if (stepId < currentStep) return "done";
    return "pending";
  };

  return (
    <nav aria-label="Progress">
      <div className="flex  justify-between">
        {steps.map((step, idx) => {
          const stepStatus = getStepStatus(step.number);
          const isLastStep = idx === steps.length - 1;

          return (
            <React.Fragment key={step.number}>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center gap-y-2">
                  <div
                    className={cn(
                      "h-6 w-6 flex items-center justify-center rounded-full text-sm relative",

                      stepsStyle[stepStatus] === "bg-main-green text-white"
                        ? "after:bg-main-green"
                        : "after:bg-gray-200",
                      stepsStyle[stepStatus]
                    )}
                  >
                    {step.number < currentStep ? (
                      <FaCheck size={14} className="fw-bold" />
                    ) : (
                      step.number
                    )}
                  </div>
                </div>
                <div className="text-sm leading-5 text-gray-300">
                  {t(step.name)}
                </div>
              </div>
              {!isLastStep && (
                <div
                  className={cn(
                    "flex-1 h-0.5 mt-3",
                    language === "ar" ? "mx-0" : "mx-4",
                    step.number < currentStep ? "bg-green-500" : "bg-gray-300",
                    "transition-colors duration-300 ease-in-out"
                  )}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};

export default ForgetPasswordSteps;
