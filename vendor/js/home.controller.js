
app.controller('homeCtrl', function ($scope) {

    $scope.dataArr = [
        {
          "title": "Hip Replacement Surgery",
          "isActive": 0,
          "patientId": 400,
          "files": [
            {
              "fileId": "70e3fc7f-de40-4657-bb83-02ba1b2ac483",
              "fileGroupId": 6,
              "title": "eweewew",
              "status": 0,
              "createdAt": 1589708389213,
              "updatedAt": 1589708389213
            },
            {
              "fileId": "c054fbfe-48db-45ac-8f30-d088b7dba595",
              "fileGroupId": 7,
              "title": "eweewew",
              "status": 0,
              "createdAt": 1589708389213,
              "updatedAt": 1589708389213
            }
          ],
          "updatedAt": 1589708389488,
          "createdAt": 1589708389488,
          "id": "5ec10665f94dbe03a4528196",
          "requesterName": "Roy Barak Dev",
          "requesterOrgName": "Acme Clinic"
        },
        {
          "title": "IVF Treatment #3",
          "isActive": 0,
          "patientId": 400,
          "files": [
            {
              "fileId": "03bd250c-b80d-4b6d-ae10-9cd228c4b78d",
              "fileGroupId": 6,
              "title": "fgffgff",
              "status": 0,
              "createdAt": 1589708885677,
              "updatedAt": 1589708885677,
              "comment": "dsddsd"
            }
          ],
          "updatedAt": 1589708886012,
          "createdAt": 1589708886012,
          "id": "5ec108563df43e11860aa846",
          "requesterName": "Roy Barak Dev",
          "requesterOrgName": "Acme Clinic"
        },
        {
          "title": "IVF Treatment #2",
          "isActive": 0,
          "patientId": 400,
          "files": [
            {
              "fileId": "ade5731e-3d33-48de-9384-0414de0c3638",
              "fileGroupId": 6,
              "title": "saassasa",
              "status": 1,
              "createdAt": 1589709324378,
              "updatedAt": 1589709324378,
              "ext": "pdf",
              "path": "org-1/400/5ec10a0ca9f07f32ca5762b5/ade5731e-3d33-48de-9384-0414de0c3638.pdf",
              "size": 120301,
              "comment": "vcxvx"
            }
          ],
          "updatedAt": 1589709324648,
          "createdAt": 1589709324648,
          "id": "5ec10a0ca9f07f32ca5762b5",
          "requesterName": "Roy Barak Dev",
          "requesterOrgName": "Acme Clinic"
        },
        {
          "title": "Knee replacement",
          "isActive": 0,
          "patientId": 400,
          "files": [
            {
              "fileId": "ba78567d-4f64-494e-aa21-4bd2c7b510dc",
              "fileGroupId": 6,
              "title": "eweewew",
              "status": 0,
              "createdAt": 1589718585515,
              "updatedAt": 1589718585515
            }
          ],
          "updatedAt": 1589718585804,
          "createdAt": 1589718585804,
          "id": "5ec12e39f8a81527ef3d4c55",
          "requesterName": "Roy Barak Dev",
          "requesterOrgName": "Acme Clinic"
        },
        // {
        //   "title": "fdsgsddgd",
        //   "isActive": 0,
        //   "patientId": 400,
        //   "files": [
        //     {
        //       "fileId": "d0aaf7f6-bc65-4e86-8ec3-2593e316a46b",
        //       "fileGroupId": 6,
        //       "title": "trtrrtrt",
        //       "status": 1,
        //       "createdAt": 1589718805527,
        //       "updatedAt": 1589718805527,
        //       "ext": "pdf",
        //       "path": "org-1/400/5ec12f196bd5197e1b56b0c2/trtrrtrt.pdf",
        //       "size": 120301
        //     }
        //   ],
        //   "updatedAt": 1589718805831,
        //   "createdAt": 1589718805831,
        //   "id": "5ec12f196bd5197e1b56b0c2",
        //   "requesterName": "Roy Barak Dev",
        //   "requesterOrgName": "Acme Clinic"
        // },
        // {
        //   "title": "test 99",
        //   "isActive": 0,
        //   "patientId": 400,
        //   "files": [
        //     {
        //       "fileId": "c2a3a04a-b675-4aa5-9c3f-8ab805d3e9db",
        //       "fileGroupId": 4,
        //       "title": "trtrrtrt",
        //       "status": 0,
        //       "createdAt": 1589718963968,
        //       "updatedAt": 1589718963968
        //     }
        //   ],
        //   "updatedAt": 1589718964194,
        //   "createdAt": 1589718964194,
        //   "id": "5ec12fb4be5b2d5ee45eb034",
        //   "requesterName": "Roy Barak Dev",
        //   "requesterOrgName": "Acme Clinic"
        // },
        // {
        //   "title": "test10",
        //   "isActive": 0,
        //   "patientId": 400,
        //   "files": [
        //     {
        //       "fileId": "a42ba32a-ba05-4c58-837d-3f742f3ca44b",
        //       "fileGroupId": 6,
        //       "title": "xxxx",
        //       "status": 0,
        //       "createdAt": 1589721011687,
        //       "updatedAt": 1589721011687,
        //       "comment": "dsgdsg"
        //     }
        //   ],
        //   "updatedAt": 1589721011935,
        //   "createdAt": 1589721011935,
        //   "id": "5ec137b4b5909e2f717b2206",
        //   "requesterName": "Roy Barak Dev",
        //   "requesterOrgName": "Acme Clinic"
        // },
        // {
        //   "title": "test 8",
        //   "isActive": 0,
        //   "patientId": 400,
        //   "files": [
        //     {
        //       "fileId": "9ad1b643-3557-4d56-b8fc-6d5c013adcc7",
        //       "fileGroupId": 6,
        //       "title": "eweewew",
        //       "status": 0,
        //       "createdAt": 1589741465661,
        //       "updatedAt": 1589741465661
        //     },
        //     {
        //       "fileId": "c2440d8f-f042-4d14-8b2e-6f35fa428dc5",
        //       "fileGroupId": 5,
        //       "title": "tests",
        //       "status": 0,
        //       "createdAt": 1589741465661,
        //       "updatedAt": 1589741465661
        //     },
        //     {
        //       "fileId": "aace0a74-fb3a-469b-bc17-061b76bcedd0",
        //       "fileGroupId": 6,
        //       "title": "trtrrtrt",
        //       "status": 0,
        //       "createdAt": 1589741465661,
        //       "updatedAt": 1589741465661
        //     }
        //   ],
        //   "updatedAt": 1589741465908,
        //   "createdAt": 1589741465908,
        //   "id": "5ec1879aaffdc7743618985a",
        //   "requesterName": "Roy Barak Dev",
        //   "requesterOrgName": "Acme Clinic"
        // },
        // {
        //   "title": "test10",
        //   "isActive": 0,
        //   "patientId": 400,
        //   "files": [
        //     {
        //       "fileId": "b12728a4-31f4-40ac-8765-79a3eec86a54",
        //       "fileGroupId": 6,
        //       "title": "gfgffgf",
        //       "status": 0,
        //       "createdAt": 1589781902849,
        //       "updatedAt": 1589781902849,
        //       "comment": "sdsa"
        //     }
        //   ],
        //   "updatedAt": 1589781903090,
        //   "createdAt": 1589781903090,
        //   "id": "5ec2258f1d0dbc6b9b170226",
        //   "requesterName": "Roy Barak Dev",
        //   "requesterOrgName": "Acme Clinic"
        // },
        // {
        //   "title": "test55",
        //   "isActive": 0,
        //   "patientId": 400,
        //   "files": [
        //     {
        //       "fileId": "4e5cbfed-7bf7-42c7-b6f5-a8950e1133eb",
        //       "fileGroupId": 6,
        //       "title": "dsfsf",
        //       "status": 0,
        //       "createdAt": 1589790785798,
        //       "updatedAt": 1589790785798,
        //       "comment": "xxxx"
        //     },
        //     {
        //       "fileId": "e1bbbe91-2028-4088-9ad1-5c02648d2eb0",
        //       "fileGroupId": 6,
        //       "title": "dsdss",
        //       "status": 0,
        //       "createdAt": 1589790785798,
        //       "updatedAt": 1589790785798,
        //       "comment": "xxxxx"
        //     },
        //     {
        //       "fileId": "c0c476a4-ec8d-4e67-8b53-c1649e3b7b7d",
        //       "fileGroupId": 5,
        //       "title": "dsdsds",
        //       "status": 0,
        //       "createdAt": 1589790785798,
        //       "updatedAt": 1589790785798
        //     },
        //     {
        //       "fileId": "08455587-0b33-44ee-ac50-85e2ffa3770c",
        //       "fileGroupId": 4,
        //       "title": "dsds",
        //       "status": 0,
        //       "createdAt": 1589790785798,
        //       "updatedAt": 1589790785798
        //     },
        //     {
        //       "fileId": "73cc29f7-aaf5-4b45-8919-4b30d9d4b78d",
        //       "fileGroupId": 1,
        //       "title": "dsdssd",
        //       "status": 0,
        //       "createdAt": 1589790785798,
        //       "updatedAt": 1589790785798
        //     }
        //   ],
        //   "updatedAt": 1589790786020,
        //   "createdAt": 1589790786020,
        //   "id": "5ec24842d2ba822dee4444c4",
        //   "requesterName": "Roy Barak Dev",
        //   "requesterOrgName": "Acme Clinic"
        // }
      ]


    function init() {

        
    }


        
    init();


});