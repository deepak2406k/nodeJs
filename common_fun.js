module.exports = {
    func1: function () {
      const response = {
        statusCode: 200,
        body: JSON.stringify({
          message: `Hello, the current time is ${new Date().toTimeString()}.`,
        }),
      };
      return response;
    }
  };