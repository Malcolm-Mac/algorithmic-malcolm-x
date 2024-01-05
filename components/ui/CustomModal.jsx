import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";

export default function CustomModal({ isOpen, onClose }) {
  const [backdrop, setBackdrop] = React.useState("blur");
  const [selected, setSelected] = React.useState("qualifications");

  const handleDownload = () => {
  
    const fileUrl = "https://drive.google.com/file/d/1YR8URvlakFR3ALWErYiE8cc2vdBb-d6K/view?usp=sharing";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
    document.body.removeChild(link);

    onClose();
  };

  return (
    <>
      <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Education
              </ModalHeader>
              <ModalBody>
                <div className="flex w-full flex-col">
                  <Tabs
                    aria-label="Options"
                    selectedKey={selected}
                    onSelectionChange={setSelected}
                  >
                    <Tab
                      key="qualifications"
                      title="Qualifications"
                      className="flex-col"
                    >
                      <Card key="degree" className="mb-4">
                        <CardBody key="degree">
                          <div className="flex items-center">
                            <div className="p-2"></div>
                            <h4 className="font-semibold">
                              BSc. Computer Science and Informatics
                            </h4>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button disabled variant="bordered">
                              Started (2016)
                            </Button>
                            <div>
                              <img
                                src="/right-arrow.png"
                                alt="awards"
                                className="object-contain h-5 w-5"
                              />
                            </div>
                            <Button disabled color="primary" variant="bordered">
                              Completed (2019)
                            </Button>
                          </div>
                          <div></div>
                        </CardBody>
                      </Card>
                      <Card key="matric">
                        <CardBody key="matric">
                          <div className="flex">
                            <div className="p-2">

                            </div>
                            <div>
                              <h4 className="font-semibold">Matric</h4>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button disabled variant="bordered">
                              Started (2016)
                            </Button>
                            <div>
                              <img
                                src="/right-arrow.png"
                                alt="awards"
                                className="object-contain h-5 w-5"
                              />
                            </div>
                            <Button disabled color="primary" variant="bordered">
                              Completed (2019)
                            </Button>
                          </div>
                          <div></div>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="certificates" title="Certificates">
                      <Card>
                        <CardBody>
                          Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo
                          consequat. Duis aute irure dolor in reprehenderit in
                          voluptate velit esse cillum dolore eu fugiat nulla
                          pariatur.
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="badges" title="Badges">
                      <Card>
                        <CardBody>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit anim id est
                          laborum.
                        </CardBody>
                      </Card>
                    </Tab>
                  </Tabs>
                </div>
              </ModalBody>
              <ModalFooter className="flex justify-between">
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handleDownload}>
                  Download Resume
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
