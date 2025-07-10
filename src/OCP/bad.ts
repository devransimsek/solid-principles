function generateReport(type: string): void {
  if (type === 'pdf') {
    console.log('Generating PDF Report...');
  } else if (type === 'csv') {
    console.log('Generating CSV Report...');
  } else if (type === 'html') {
    console.log('Generating HTML Report...');
  } else {
    throw new Error('Unsupported report type');
  }
}

generateReport('csv');
