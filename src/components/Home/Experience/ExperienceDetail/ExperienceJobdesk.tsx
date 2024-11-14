"use client";

import { ListItem, OrderedList, useColorModeValue } from "@chakra-ui/react";

import { IWorkingExperience } from "@/types/experience";

interface ExperienceJobdeskProps {
  jobdesk: IWorkingExperience["jobdesk"];
}

const ExperienceJobdesk = ({ jobdesk }: ExperienceJobdeskProps) => {
  const backgroundColor = useColorModeValue(
    "background._dark",
    "background._light",
  );

  return (
    <OrderedList listStylePosition="outside">
      {jobdesk.map((job, jobKey) => {
        return (
          <ListItem
            key={jobKey}
            listStyleType="none"
            mb={3}
            display="flex"
            alignItems="start"
            _before={{
              content: `'${jobKey + 1}'`,
              marginRight: 5,
              fontSize: "md",
              position: "relative",
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: 25,
              minWidth: 25,
              maxHeight: 25,
              maxWidth: 25,
              color: "background",
              background: backgroundColor,
              fontWeight: "bold",
              borderRadius: "3px",
            }}
          >
            {job}
          </ListItem>
        );
      })}
    </OrderedList>
  );
};

export default ExperienceJobdesk;
