# Mocks
Objects that simulate the behavior of real objects. They are usually created to test the behavior of other objects (Class or real Object) so that we can focus on the unit test to be tested

### Test first what will break

**Tests**: 
- [x] the file should have id, name, profession and age fields in header of csv
- [x] the file should **NOT** be empty
- [x] the file should **NOT** be longer than 4 lines including headers

---
creating the items in csv to view the tests
  > - [x] the file should NOT be empty -> emptyFile-invalid.csv
---

- if we need to test in different scenarios we should use different mocks to avoid
repetitive testing
