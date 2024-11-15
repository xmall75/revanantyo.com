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
            fontSize={{
              base: "sm",
              md: "md",
            }}
            _before={{
              content: `'${jobKey + 1}'`,
              marginRight: {
                base: 2,
                md: 3,
                lg: 5,
              },
              fontSize: {
                base: "sm",
                md: "md",
              },
              position: "relative",
              display: "inline-flex",
              justifyContent: "center",
              alignItems: { base: "start", md: "center" },
              minHeight: { base: 19, md: 21, lg: 25 },
              minWidth: { base: 19, md: 21, lg: 25 },
              maxHeight: { base: 19, md: 21, lg: 25 },
              maxWidth: { base: 19, md: 21, lg: 25 },
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
